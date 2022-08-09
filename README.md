# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Downloads | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.3.0 | 36/week | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 1,261,794/week | Yes | Yes 
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 630,666/week | Yes | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 627,255/week | Yes |  
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.0 | 2,737,770/week | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 831,940/week | Yes | Yes 
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.0 | 1,937,082/week |  | Yes 
<!-- packages -->

## Tests
The tests run on generated data files with 10 - 100 columns and 10K - 1M rows, both quoted and unquoted. The stream implementation for each library were used to keep comparison consistent, but can be slower compared to self chunking in certain use cases.

<!-- tests -->
| columns x rows | cycles 
|----------------|--------
| 10 x 10000 | 20 
| 100 x 10000 | 10 
| 10 x 100000 | 10 
| 100 x 100000 | 5 
| 10 x 1000000 | 5 
<!-- tests -->

## Results 
Benchmarked on GitHub Actions.

### Parse
![Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dtrue.png)

<!-- parse quotes=true -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 15ms | 132ms | 138ms | 1,338ms | 1,417ms 
| **papaparse** | 16ms | 141ms | 147ms | 1,431ms | 1,514ms 
| **csv-parser** | 25ms | 236ms | 252ms | 2,477ms | 2,644ms 
| **csvtojson** | 30ms | 267ms | 297ms | 2,699ms | 3,015ms 
| **csv-parse** | 40ms | 353ms | 398ms | 3,681ms | 4,135ms 
| **fast-csv** | 58ms | 536ms | 601ms | 5,570ms | 6,218ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 10ms | 80ms | 85ms | 827ms | 873ms 
| **papaparse** | 6ms | 30ms | 53ms | 293ms | 533ms 
| **csv-parser** | 22ms | 208ms | 221ms | 2,192ms | 2,326ms 
| **csvtojson** | 17ms | 156ms | 171ms | 1,554ms | 1,761ms 
| **csv-parse** | 34ms | 321ms | 379ms | 3,378ms | 3,852ms 
| **fast-csv** | 50ms | 461ms | 516ms | 4,839ms | 5,485ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 12ms | 77ms | 123ms | 784ms | 1,287ms 
| **csv-stringify** | 12ms | 69ms | 118ms | 668ms | 1,180ms 
| **fast-csv** | 14ms | 80ms | 141ms | 886ms | 1,433ms 
<!-- format quotes=false -->

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