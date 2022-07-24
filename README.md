# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers:

* [csv-rex](https://github.com/willfarrell/csv-rex)
* [PapaParse](https://www.papaparse.com/)
* [csv-parser](https://www.npmjs.com/package/csv-parser)
* [csv-parse](https://csv.js.org/parse/)
* [fast-csv](https://www.npmjs.com/package/fast-csv)
  
The tests run on generated data files with 10/100 columns and 10k/100k/1M/10M rows, both quoted and unquoted.


## Results 
Benchmarked on GitHub Actions.

### Non-Quoted CSV files
![Non-Quoted CSV Parser Benchmarks](results/quotes=false.png)


### Quoted CSV Files
![Quoted CSV Parser Benchmarks](results/quotes=true.png)


## Excluded

* [dekkai](https://www.npmjs.com/package/dekkai) unable to parse larger CSVs due to crashing


## Roadmap
- Add in more parsers
  - `stream-csv-as-json`
- Add in formatters
  - `csv-string`

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.