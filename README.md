# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers:

| Package                                                | Version | Downloads
|--------------------------------------------------------|---------|---------
| [csv-rex](https://github.com/willfarrell/csv-rex)      | ![npm (scoped)](https://img.shields.io/npm/v/@datastream/csv) | ![npm](https://img.shields.io/npm/dw/@datastream/csv)
| [PapaParse](https://www.papaparse.com/)                | ![npm (scoped)](https://img.shields.io/npm/v/papaparse) | ![npm](https://img.shields.io/npm/dw/papaparse)
| [csv-parser](https://www.npmjs.com/package/csv-parser) | ![npm (scoped)](https://img.shields.io/npm/v/csv-parser) | ![npm](https://img.shields.io/npm/dw/csv-parser)
| [csv](https://csv.js.org)                              | ![npm (scoped)](https://img.shields.io/npm/v/csv) | ![npm](https://img.shields.io/npm/dw/csv)
| [fast-csv](https://www.npmjs.com/package/fast-csv)     | ![npm (scoped)](https://img.shields.io/npm/v/fast-csv) | ![npm](https://img.shields.io/npm/dw/fast-csv)

The tests run on generated data files with 10/100 columns and 10k/100k rows, both quoted and unquoted. The stream implementation for each library were used to keep comparison consistent, but can be slower compares to self chunking in certain use cases.


## Results 
Benchmarked on GitHub Actions. Raw numbers are in the results folder.

### Non-Quoted CSV files
![Non-Quoted CSV Parser Benchmarks](results/quotes=false.png)


### Quoted CSV Files
![Quoted CSV Parser Benchmarks](results/quotes=true.png)


## Roadmap
- Add in more parsers
  - `stream-csv-as-json`
- Add in formatters
  - `csv-string`

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.