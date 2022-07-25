import { tmpdir } from 'node:os'
import { dirname, join } from "node:path"
import { createReadStream, createWriteStream } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { pipeline, pipejoin, streamToArray, streamToString, createReadableStream } from '@datastream/core'
import { generateCSV } from "./lib/generateCSV.js";
import { benchmark } from "./lib/benchmark.js";

import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const sources = ['csv-rex','papaparse', 'csv-parser', 'csv', 'fast-csv']

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
    cycles: 5,
  },
  {
    columns: 100,
    rows: 100_000,
    cycles: 5,
  },
  // Skews graph
//{
//  columns: 10,
//  rows: 1_000_000,
//  cycles: 3,
//},
//{
//  columns: 100,
//  rows: 1_000_000,
//  cycles: 3,
//},
  // Super slow
//{
//  columns: 10,
//  rows: 10_000_000,
//  cycles: 2,
//},
//{
//  columns: 100,
//  rows: 10_000_000,
//  cycles: 2,
//},
];

const run = async (quotes = false) => {
  const chart = {
    type: 'line',
    data: {
      labels: tests.map(t => `${t.columns}x${t.rows/1000}K`),
      datasets: []
    },
    options: {
      title: {
        display: true,
        text: `CSV Benchmarks with quotes=${quotes}`,
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
    const { parse, format } = await import(`./packages/${source}/index.js`)
    for (const { rows, columns, cycles } of tests) {
      const quotes = true
      const readableFileName = join(tmpdir(), `${columns}x${rows}_${quotes ? 'quoted' : 'slim'}.csv`)
      //const writableFileName = join(tmpdir(), `${columns}x${rows}_${source}.csv`)
      
      await generateCSV({ readableFileName, columns, rows, quotes });
      
      // Benchmark
      let stream = async () => pipeline([
        createReadStream(readableFileName),
        await parse(),
        //    await format(),
        //    createWriteStream(writableFileName, {encoding:'utf8'})
      ])
      
      const result = await benchmark(source, stream, { cycles, columns, rows });
      dataset.data.push(result)
      
    }
    chart.data.datasets.push(dataset)
    table += `| **${dataset.label}** | ${dataset.data.join('ms | ')} \n`
  }
  
  // Save results
  console.log(table)
  await pipeline([
    createReadableStream(table),
    createWriteStream(join(__dirname, `results/quotes=${quotes}.md`))
  ])
  
  console.log(JSON.stringify(chart))
  await pipeline([
    createReadableStream(JSON.stringify(chart, null, 2)),
    createWriteStream(join(__dirname, `results/quotes=${quotes}.json`))
  ])
  
  await pipeline([
    await fetch(`https://quickchart.io/chart?c=${JSON.stringify(chart)}`).then(res => res.body),
    createWriteStream(join(__dirname, `results/quotes=${quotes}.png`))
  ])
  
  // Update README
  await readFile(join(__dirname, `README.md`), { encoding: 'utf8' })
  .then(data => {
    const pattern = new RegExp(`<!-- quotes=${quotes} -->([\\s\\S]*?)<!-- quotes=${quotes} -->`)
    return data.replace(pattern, `<!-- quotes=${quotes} -->\n${table}<!-- quotes=${quotes} -->`)
  })
  .then(data => writeFile(join(__dirname, `README.md`), data, { encoding: 'utf8' }))

}

await run(true)
await run(false)