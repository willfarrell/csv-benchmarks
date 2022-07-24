import { tmpdir } from 'node:os'
import { dirname, join } from "node:path"
import { createReadStream, createWriteStream } from 'node:fs'
import { writeFile } from 'node:fs/promises'
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
//{
//  columns: 100,
//  rows: 10_000,
//  cycles: 10,
//},
//{
//  columns: 10,
//  rows: 100_000,
//  cycles: 5,
//},
//{
//  columns: 100,
//  rows: 100_000,
//  cycles: 5,
//},
//{
//  columns: 10,
//  rows: 1_000_000,
//  cycles: 5,
//},
//{
//  columns: 100,
//  rows: 1_000_000,
//  cycles: 5,
  //},
//{
//  columns: 10,
//  rows: 10_000_000,
//  cycles: 5,
//},
];

const run = async (quotes = false) => {
  const chart = {
    type: 'line',
    data: {
      labels: tests.map(t => `${t.columns}x${t.rows/1000}K`),
      datasets: []
    }
  }
  
  for(const source of sources) {  
    const dataset = {
      label: source,
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
        //    format(),
        //    createWriteStream(writableFileName, {encoding:'utf8'})
      ])
      
      const result = await benchmark(source, stream, { cycles, columns, rows });
      dataset.data.push(result)
      //  stream = pipeline([
      //    createReadableStream(lines),
      //    format(),
      //    createWriteStream(writableFileName, {encoding:'utf8'})
      //  ])
      //  
      //  await benchmark(source, stream, { cycles })
      
    }
    chart.data.datasets.push(dataset)
  }
  
  await pipeline([
    createReadableStream(JSON.stringify(chart, null, 2)),
    createWriteStream(join(__dirname, `results/quotes=${quotes}.json`))
  ])
  
  await pipeline([
    await fetch(`https://quickchart.io/chart?c=${JSON.stringify(chart)}`).then(res => res.body),
    createWriteStream(join(__dirname, `results/quotes=${quotes}.png`))
  ])
}

await run(true)
await run(false)