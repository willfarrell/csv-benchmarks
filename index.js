import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import {
  pipeline,
  pipejoin,
  streamToArray,
  streamToString,
  createReadableStream,
} from '@datastream/core'
import { generateCSVFile, generateCSVArray } from './lib/generateCSV.js'
import { benchmark } from './lib/benchmark.js'

import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const sources = [
  'csv-rex',
  'csv-parse',
  'csv-parser',
  'csv-streamify',
  'csv-stringify',
  'csvtojson',
  'fast-csv',
  'papaparse',
]

const tests = [
  {
    columns: 10,
    rows: 10_000,
    cycles: 20,
  },
  {
    columns: 100,
    rows: 10_000,
    cycles: 10,
  },
  {
    columns: 10,
    rows: 100_000,
    cycles: 10,
  },
  {
    columns: 100,
    rows: 100_000,
    cycles: 5,
  },
  {
    columns: 10,
    rows: 1_000_000,
    cycles: 5,
  },
]

const run = async (sources, type, quotes = false) => {
  const chart = {
    type: 'line',
    data: {
      labels: tests.map((t) => `${t.columns}x${t.rows / 1000}K`),
      datasets: [],
    },
    options: {
      title: {
        display: true,
        text: `CSV ${type} Benchmarks with quotes=${quotes}`,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'columns x rows',
            },
          },
        ],
        yAxes: [
          {
            display: true,
            type: 'logarithmic',
            scaleLabel: {
              display: true,
              labelString: 'duration (ms)',
            },
          },
        ],
      },
    },
  }

  let table = `| Package | ${chart.data.labels.join(' | ')} \n`
  table += `|---------|-${chart.data.labels.map((v) => '-').join('-|-')}-\n`

  for (const source of sources) {
    const dataset = {
      label: source,
      fill: false,
      data: [],
    }
    const engine = await import(`./packages/${source}/index.js`)
    if (!engine[type]) continue

    for (const { rows, columns, cycles } of tests) {
      let stream
      if (type === 'parse') {
        const readableFileName = join(
          tmpdir(),
          `${columns}x${rows}_${quotes ? 'quoted' : 'slim'}.csv`
        )
        await generateCSVFile({ readableFileName, columns, rows, quotes })
        stream = async () =>
          pipeline([
            createReadStream(readableFileName),
            engine.parse({ quotes }),
          ])
      } else if (type === 'format') {
        const arr = generateCSVArray({ columns, rows, quotes })
        stream = async () =>
          pipeline([createReadableStream(arr), engine.format()])
        //const writableFileName = join(tmpdir(), `${columns}x${rows}_${quotes ? 'quoted' : 'slim'}.csv`)
      }

      // Benchmark
      const result = await benchmark(source, stream, { cycles, columns, rows })
      dataset.data.push(result)
    }
    chart.data.datasets.push(dataset)
  }

  // filter out the slow ones
  const ranks = {}
  for (const dataset of chart.data.datasets) {
    const { label, data } = dataset
    ranks[label] = data.reduce((total, value) => total + value)
  }
  chart.data.datasets = chart.data.datasets.sort((a, b) => {
    return ranks[a.label] - ranks[b.label]
  })
  for (const dataset of chart.data.datasets) {
    table += `| **${dataset.label}** | ${dataset.data
      .map((result) => result.toLocaleString())
      .join('ms | ')}ms \n`
  }

  // Save results
  await pipeline([
    createReadableStream(table),
    createWriteStream(join(__dirname, `results/${type}_quotes=${quotes}.md`)),
  ])

  chart.data.datasets = chart.data.datasets.slice(0, 5) // get first 5
  console.log(JSON.stringify(chart))
  await pipeline([
    createReadableStream(JSON.stringify(chart, null, 2)),
    createWriteStream(join(__dirname, `results/${type}_quotes=${quotes}.json`)),
  ])

  await pipeline([
    await fetch(`https://quickchart.io/chart?c=${JSON.stringify(chart)}`).then(
      (res) => res.body
    ),
    createWriteStream(join(__dirname, `results/${type}_quotes=${quotes}.png`)),
  ])

  // Update README
  await readFile(join(__dirname, `README.md`), { encoding: 'utf8' })
    .then((data) => {
      const pattern = new RegExp(
        `<!-- ${type} quotes=${quotes} -->([\\s\\S]*?)<!-- ${type} quotes=${quotes} -->`
      )
      return data.replace(
        pattern,
        `<!-- ${type} quotes=${quotes} -->\n${table}<!-- ${type} quotes=${quotes} -->`
      )
    })
    .then((data) =>
      writeFile(join(__dirname, `README.md`), data, { encoding: 'utf8' })
    )
}

// Update README packages table
const diff = (d) => {
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerWeek = msPerDay * 7
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365.25
  const elapsed = d - new Date()
  const absElapsed = Math.abs(elapsed)
  // if (absElapsed < msPerMinute) {
  //   return [Math.round(elapsed / 1000), 'second']
  // }
  // if (absElapsed < msPerHour) {
  //   return [Math.round(elapsed / msPerMinute), 'minute']
  // }
  // if (absElapsed < msPerDay) {
  //   return [Math.round(elapsed / msPerHour), 'hour']
  // }
  if (absElapsed < msPerWeek * 2) {
    return [Math.round(elapsed / msPerDay), 'day']
  }
  if (absElapsed < msPerMonth) {
    return [Math.round(elapsed / msPerWeek), 'week']
  }
  if (absElapsed < msPerYear) {
    return [Math.round(elapsed / msPerMonth), 'month']
  }
  return [Math.round(elapsed / msPerYear), 'year']
}
const rtf = new Intl.RelativeTimeFormat('en', {
  localeMatcher: 'best fit',
  numeric: 'always',
  style: 'long',
})
const { dependencies } = await readFile(join(__dirname, './package.json')).then(
  (data) => JSON.parse(data)
)
let table = `| Package | Version | Published | Parse | Format \n`
table += `|---------|---------|-----------|-------|--------\n`
const packages = new Set(sources.sort())
for (const pkg of packages) {
  const repo = await fetch(`https://registry.npmjs.org/${pkg}`).then((res) =>
    res.json()
  )
  const version = dependencies[pkg] //repo['dist-tags'].latest
  const created = new Date(repo.time[version])
  const [value, unit] = diff(created)
  const published = rtf.format(value, unit)
  const { parse, format } = await import(`./packages/${pkg}/index.js`)
  const { downloads } = await fetch(
    `https://api.npmjs.org/downloads/point/last-week/${pkg}`
  ).then((res) => res.json())
  console.log(
    `${pkg}@${version} published ${published}, ${downloads.toLocaleString()}/week`
  )
  table += `| [${pkg}](https://www.npmjs.com/package/${pkg}) | ${version} | ${published} | ${
    !!parse ? 'Yes' : ''
  } | ${!!format ? 'Yes' : ''} \n`
}
await readFile(join(__dirname, `README.md`), { encoding: 'utf8' })
  .then((data) => {
    const pattern = new RegExp(`<!-- packages -->([\\s\\S]*?)<!-- packages -->`)
    return data.replace(pattern, `<!-- packages -->\n${table}<!-- packages -->`)
  })
  .then((data) =>
    writeFile(join(__dirname, `README.md`), data, { encoding: 'utf8' })
  )

// Update README tests table
table = `| columns x rows | cycles \n`
table += `|----------------|--------\n`
for (const test of tests) {
  table += `| ${test.columns.toLocaleString()} x ${test.rows.toLocaleString()} | ${test.cycles.toLocaleString()} \n`
}
await readFile(join(__dirname, `README.md`), { encoding: 'utf8' })
  .then((data) => {
    const pattern = new RegExp(`<!-- tests -->([\\s\\S]*?)<!-- tests -->`)
    return data.replace(pattern, `<!-- tests -->\n${table}<!-- tests -->`)
  })
  .then((data) =>
    writeFile(join(__dirname, `README.md`), data, { encoding: 'utf8' })
  )

// run tests
await run(sources, 'parse', true)
await run(sources, 'parse', false)
await run(sources, 'format', false)
