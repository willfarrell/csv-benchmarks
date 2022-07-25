# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers:

| Package                                                | Version | Downloads
|--------------------------------------------------------|---------|---------
| [csv-rex](https://github.com/willfarrell/csv-rex)      | ![npm (scoped)](https://img.shields.io/npm/v/@datastream/csv) | ![npm](https://img.shields.io/npm/dw/@datastream/csv)
| [PapaParse](https://www.papaparse.com/)                | ![npm (scoped)](https://img.shields.io/npm/v/papaparse) | ![npm](https://img.shields.io/npm/dw/papaparse)
| [csv-parser](https://www.npmjs.com/package/csv-parser) | ![npm (scoped)](https://img.shields.io/npm/v/csv-parser) | ![npm](https://img.shields.io/npm/dw/csv-parser)
| [csv](https://csv.js.org)                              | ![npm (scoped)](https://img.shields.io/npm/v/csv) | ![npm](https://img.shields.io/npm/dw/csv)
| [fast-csv](https://www.npmjs.com/package/fast-csv)     | ![npm (scoped)](https://img.shields.io/npm/v/fast-csv) | ![npm](https://img.shields.io/npm/dw/fast-csv)

The tests run on generated data files with 10/100 columns and 10k/100k rows, both quoted and unquoted. The stream implementation for each library were used to keep comparison consistent, but can be slower compared to self chunking in certain use cases.


## Results 
Benchmarked on GitHub Actions.

![Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/quotes%3Dtrue.png)

<!-- quotes=true -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K 
|---------|---|---|---|---
| **csv-rex** | 28ms | 217ms | 250ms | 2665 
| **papaparse** | 47ms | 379ms | 421ms | 2969 
| **csv-parser** | 53ms | 492ms | 541ms | 5927 
| **csv** | 88ms | 752ms | 907ms | 8331 
| **fast-csv** | 170ms | 1570ms | 3509ms | 15129 
<!-- quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/quotes%3Dfalse.png)

<!-- quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K 
|---------|---|---|---|---
| **csv-rex** | 37ms | 286ms | 318ms | 3194 
| **papaparse** | 42ms | 331ms | 359ms | 2886 
| **csv-parser** | 59ms | 555ms | 603ms | 5634 
| **csv** | 83ms | 883ms | 1111ms | 14343 
| **fast-csv** | 682ms | 2420ms | 1920ms | 22217 
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