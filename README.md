# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers:

| Package                                                | Version                                                  | Downloads
|--------------------------------------------------------|----------------------------------------------------------|---------
| [csv-rex](https://github.com/willfarrell/csv-rex)      | ![npm (scoped)](https://img.shields.io/npm/v/csv-rex)    | ![npm](https://img.shields.io/npm/dw/csv-rex)
| [PapaParse](https://www.papaparse.com/)                | ![npm (scoped)](https://img.shields.io/npm/v/papaparse)  | ![npm](https://img.shields.io/npm/dw/papaparse)
| [csv-parser](https://www.npmjs.com/package/csv-parser) | ![npm (scoped)](https://img.shields.io/npm/v/csv-parser) | ![npm](https://img.shields.io/npm/dw/csv-parser)
| [csvtojson](https://www.npmjs.com/package/csvtojson)   | ![npm (scoped)](https://img.shields.io/npm/v/csvtojson)  | ![npm](https://img.shields.io/npm/dw/csvtojson)
| [csv](https://csv.js.org)                              | ![npm (scoped)](https://img.shields.io/npm/v/csv)        | ![npm](https://img.shields.io/npm/dw/csv)
| [fast-csv](https://www.npmjs.com/package/fast-csv)     | ![npm (scoped)](https://img.shields.io/npm/v/fast-csv)   | ![npm](https://img.shields.io/npm/dw/fast-csv)

The tests run on generated data files with 10/100 columns and 10k/100k rows, both quoted and unquoted. The stream implementation for each library were used to keep comparison consistent, but can be slower compared to self chunking in certain use cases.

| rows x columns | cycles
|----------------|--------
|  10 x 10,000   | 10
| 100 x 10,000   | 10
|  10 x 100,000  |  5
| 100 x 100,000  |  5

## Results 
Benchmarked on GitHub Actions.

![Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/quotes%3Dtrue.png)

<!-- quotes=true -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K 
|---------|---|---|---|---
| **csv-rex** | 27ms | 205ms | 227ms | 2086ms 
| **papaparse** | 29ms | 219ms | 245ms | 2217ms 
| **csvtojson** | 62ms | 546ms | 561ms | 5872ms 
| **csv-parser** | 47ms | 448ms | 633ms | 5365ms 
| **csv** | 89ms | 839ms | 977ms | 8795ms 
| **fast-csv** | 159ms | 1501ms | 1495ms | 14684ms 
<!-- quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/quotes%3Dfalse.png)

<!-- quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K 
|---------|---|---|---|---
| **csv-rex** | 34ms | 270ms | 301ms | 2532ms 
| **papaparse** | 31ms | 260ms | 296ms | 2672ms 
| **csvtojson** | 74ms | 620ms | 783ms | 5912ms 
| **csv-parser** | 59ms | 574ms | 643ms | 5958ms 
| **csv** | 91ms | 791ms | 899ms | 8192ms 
| **fast-csv** | 144ms | 1465ms | 1526ms | 14908ms 
<!-- quotes=false -->

## Roadmap
- Add in more parsers
  - `stream-csv-as-json`
  - `30-seconds-of-code`
- Add in formatters
  - `csv-string`

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.