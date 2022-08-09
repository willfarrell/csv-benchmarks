import { tmpdir } from 'node:os'
import { dirname, join } from "node:path"
import { createReadStream, createWriteStream } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { pipeline, pipejoin, streamToArray, streamToString, createReadableStream } from '@datastream/core'
import { generateCSVFile, generateCSVArray } from "./lib/generateCSV.js"
import { benchmark } from "./lib/benchmark.js";

import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const parseSources = ['csv-rex','papaparse', 'csv-parser', 'csvtojson', 'csv-parse', 'fast-csv']
const formatSources = ['csv-rex','csv-stringify', 'fast-csv']

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
//{
//  columns: 100,
//  rows: 1_000_000,
//  cycles: 3,
//},
  // Super slow
//{
//  columns: 10,
//  rows: 10_000_000,
//  cycles: 3,
//},
];

const run = async (sources, type, quotes = false) => {
  const chart = {
    type: 'line',
    data: {
      labels: tests.map(t => `${t.columns}x${t.rows/1000}K`),
      datasets: []
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
     table += `|---------|-${chart.data.labels.map(v => ('-')).join('-|-')}-\n`
  
  for(const source of sources) {  
    const dataset = {
      label: source,
      fill: false,
      data: []
    }
    const {parse, format} = await import(`./packages/${source}/index.js`)
    for (const { rows, columns, cycles } of tests) {
      let stream
      if (type === 'parse') {
        const readableFileName = join(tmpdir(), `${columns}x${rows}_${quotes ? 'quoted' : 'slim'}.csv`)
        await generateCSVFile({ readableFileName, columns, rows, quotes });
        stream = async () => pipeline([
          createReadStream(readableFileName),
          parse()
        ])
      } else if (type === 'format') {
        const arr = generateCSVArray({ columns, rows, quotes });
        stream = async () => pipeline([
          createReadableStream(arr),
          format()
        ])
        //const writableFileName = join(tmpdir(), `${columns}x${rows}_${quotes ? 'quoted' : 'slim'}.csv`)
      }
      
      // Benchmark     
      const result = await benchmark(source, stream, { cycles, columns, rows });
      dataset.data.push(result.toLocaleString())
    }
    if (chart.data.datasets.length < 5) { 
      chart.data.datasets.push(dataset)
    }
    table += `| **${dataset.label}** | ${dataset.data.join('ms | ')}ms \n`
  }
  
  // Save results
  await pipeline([
    createReadableStream(table),
    createWriteStream(join(__dirname, `results/${type}_quotes=${quotes}.md`))
  ])
  
  console.log(JSON.stringify(chart))
  await pipeline([
    createReadableStream(JSON.stringify(chart, null, 2)),
    createWriteStream(join(__dirname, `results/${type}_quotes=${quotes}.json`))
  ])
  
  await pipeline([
    await fetch(`https://quickchart.io/chart?c=${JSON.stringify(chart)}`).then(res => res.body),
    createWriteStream(join(__dirname, `results/${type}_quotes=${quotes}.png`))
  ])
  
  // Update README
  await readFile(join(__dirname, `README.md`), { encoding: 'utf8' })
  .then(data => {
    const pattern = new RegExp(`<!-- ${type} quotes=${quotes} -->([\\s\\S]*?)<!-- ${type} quotes=${quotes} -->`)
    return data.replace(pattern, `<!-- ${type} quotes=${quotes} -->\n${table}<!-- ${type} quotes=${quotes} -->`)
  })
  .then(data => writeFile(join(__dirname, `README.md`), data, { encoding: 'utf8' }))

}


// Update README packages table
const {dependencies} = await readFile(join(__dirname, './package.json')).then(data => JSON.parse(data))
let table = `| Package | Version | Parse | Format \n`
   table += `|---------|---------|-------|--------\n`
   const packages = new Set([...parseSources, ...formatSources])
   for (const pkg of packages) {
      const {version} = await fetch(`https://registry.npmjs.org/${pkg}/latest`).then(res => res.json())
       const {parse, format} = await import(`./packages/${pkg}/index.js`)
       const {downloads} = await fetch(`https://api.npmjs.org/downloads/point/last-week/${pkg}`).then(res => res.json())
     console.log(`${pkg}@${version} ${downloads.toLocaleString()}/week`)
     table += `| [${pkg}](https://www.npmjs.com/package/${pkg}) | ${version} | ${!!parse ? 'Yes' : ''} | ${!!format ? 'Yes' : ''} \n`
   }
await readFile(join(__dirname, `README.md`), { encoding: 'utf8' })
.then(data => {
  const pattern = new RegExp(`<!-- packages -->([\\s\\S]*?)<!-- packages -->`)
  return data.replace(pattern, `<!-- packages -->\n${table}<!-- packages -->`)
})
.then(data => writeFile(join(__dirname, `README.md`), data, { encoding: 'utf8' }))

// Update README tests table
table = `| columns x rows | cycles \n`
   table += `|----------------|--------\n`
   for (const test of tests) {
     table += `| ${test.columns.toLocaleString()} x ${test.rows.toLocaleString()} | ${test.cycles.toLocaleString()} \n`
   }
await readFile(join(__dirname, `README.md`), { encoding: 'utf8' })
.then(data => {
  const pattern = new RegExp(`<!-- tests -->([\\s\\S]*?)<!-- tests -->`)
  return data.replace(pattern, `<!-- tests -->\n${table}<!-- tests -->`)
})
.then(data => writeFile(join(__dirname, `README.md`), data, { encoding: 'utf8' }))

// run tests
await run(parseSources, 'parse', true)
await run(parseSources, 'parse', false)
await run(formatSources, 'format', false)




