# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.3.0 | 11 days ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 5 months ago |  | Yes 
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 3 years ago | Yes |  
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.0 | 4 weeks ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.0 | 4 weeks ago |  | Yes 
<!-- packages -->

Your preferred CSV package missing? PRs welcome.

## Tests
The tests run on generated data files with 10 - 100 columns and 10K - 1M rows, both quoted and unquoted. The stream implementation for each library were used to keep comparison consistent, but can be slower compared to self chunking in certain use cases.

<!-- tests -->
| columns x rows | cycles 
|----------------|--------
| 10 x 10,000 | 20 
| 100 x 10,000 | 10 
| 10 x 100,000 | 10 
| 100 x 100,000 | 5 
| 10 x 1,000,000 | 5 
<!-- tests -->

## Results 
Benchmarked on GitHub Actions. Only the fastest 5 will be visualized.

### Parse
![Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dtrue.png)

<!-- parse quotes=true -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 16ms | 136ms | 144ms | 1,384ms | 1,457ms 
| **papaparse** | 16ms | 142ms | 149ms | 1,443ms | 1,523ms 
| **csv-parser** | 25ms | 238ms | 255ms | 2,503ms | 2,665ms 
| **csvtojson** | 32ms | 271ms | 298ms | 2,719ms | 3,045ms 
| **csv-parse** | 39ms | 351ms | 397ms | 3,664ms | 4,123ms 
| **fast-csv** | 58ms | 534ms | 600ms | 5,542ms | 6,216ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 10ms | 80ms | 85ms | 828ms | 872ms 
| **papaparse** | 6ms | 30ms | 53ms | 292ms | 535ms 
| **csv-parser** | 21ms | 205ms | 222ms | 2,198ms | 2,324ms 
| **csvtojson** | 17ms | 154ms | 170ms | 1,553ms | 1,753ms 
| **csv-parse** | 34ms | 316ms | 359ms | 3,350ms | 3,809ms 
| **fast-csv** | 49ms | 460ms | 517ms | 4,839ms | 5,450ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 12ms | 73ms | 117ms | 754ms | 1,218ms 
| **csv-stringify** | 12ms | 66ms | 116ms | 686ms | 1,151ms 
| **fast-csv** | 13ms | 73ms | 127ms | 781ms | 1,377ms 
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