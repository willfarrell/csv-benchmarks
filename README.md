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
| **csv-rex** | 32ms | 291ms | 279ms | 2964ms 
| **papaparse** | 34ms | 273ms | 337ms | 3023ms 
| **csv-parser** | 50ms | 468ms | 487ms | 5147ms 
| **csv** | 78ms | 672ms | 813ms | 8111ms 
| **fast-csv** | 192ms | 1517ms | 1669ms | 15068ms 
<!-- quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/quotes%3Dfalse.png)

<!-- quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K 
|---------|---|---|---|---
| **csv-rex** | 48ms | 443ms | 461ms | 3388ms 
| **papaparse** | 31ms | 257ms | 305ms | 2750ms 
| **csv-parser** | 56ms | 621ms | 799ms | 5868ms 
| **csv** | 77ms | 780ms | 1029ms | 9077ms 
| **fast-csv** | 161ms | 1538ms | 1608ms | 14512ms 

<!-- quotes=false -->

## Roadmap
- Add in more parsers
  - `stream-csv-as-json`
- Add in formatters
  - `csv-string`

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.