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
| **csv-rex** | 34ms | 283ms | 318ms | 3473 
| **papaparse** | 45ms | 331ms | 347ms | 3030 
| **csv-parser** | 69ms | 613ms | 688ms | 6337 
| **csv** | 108ms | 889ms | 959ms | 9029 
| **fast-csv** | 166ms | 1428ms | 1642ms | 14712 
<!-- quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/quotes%3Dfalse.png)

<!-- quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K 
|---------|---|---|---|---
| **csv-rex** | 37ms | 294ms | 320ms | 2935 
| **papaparse** | 39ms | 322ms | 374ms | 3580 
| **csv-parser** | 69ms | 668ms | 709ms | 7528 
| **csv** | 113ms | 986ms | 1210ms | 9548 
| **fast-csv** | 157ms | 1396ms | 1777ms | 15836 
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