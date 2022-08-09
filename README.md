# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.0 | 1 month ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.3.0 | 11 days ago | Yes | Yes 
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.0 | 1 month ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 3 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 5 months ago | Yes |  
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
| **csv-rex** | 36ms | 306ms | 345ms | 3,129ms | 3,476ms 
| **papaparse** | 39ms | 314ms | 360ms | 3,212ms | 3,686ms 
| **csv-parser** | 61ms | 598ms | 619ms | 6,331ms | 6,556ms 
| **csvtojson** | 76ms | 663ms | 740ms | 6,603ms | 7,460ms 
| **csv-parse** | 103ms | 918ms | 1,022ms | 9,590ms | 10,799ms 
| **fast-csv** | 166ms | 1,514ms | 1,710ms | 15,796ms | 17,612ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **papaparse** | 13ms | 66ms | 128ms | 615ms | 1,260ms 
| **csv-rex** | 22ms | 180ms | 209ms | 1,801ms | 2,115ms 
| **csvtojson** | 42ms | 378ms | 417ms | 3,797ms | 4,271ms 
| **csv-parser** | 52ms | 521ms | 540ms | 5,483ms | 5,716ms 
| **csv-parse** | 88ms | 806ms | 921ms | 8,377ms | 9,518ms 
| **fast-csv** | 137ms | 1,255ms | 1,422ms | 13,313ms | 15,136ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 30ms | 162ms | 293ms | 1,661ms | 3,065ms 
| **csv-stringify** | 32ms | 169ms | 309ms | 1,686ms | 3,043ms 
| **fast-csv** | 36ms | 188ms | 353ms | 1,908ms | 3,517ms 
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