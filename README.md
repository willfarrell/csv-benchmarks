# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.6 | 4 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 4 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 1 year ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.1 | 1 month ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.1 | 7 months ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 1 year ago | Yes |  
<!-- packages -->

Your preferred CSV package missing? PRs welcome. Excluded packages in `/docs/EXCLUDED.md`.

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
| **csv-rex** | 23ms | 175ms | 214ms | 1,732ms | 2,114ms 
| **papaparse** | 42ms | 199ms | 395ms | 2,094ms | 4,037ms 
| **csv-parser** | 38ms | 349ms | 379ms | 3,697ms | 4,064ms 
| **csvtojson** | 56ms | 441ms | 548ms | 4,421ms | 5,526ms 
| **csv-parse** | 77ms | 663ms | 751ms | 6,912ms | 7,870ms 
| **csv-streamify** | 74ms | 724ms | 836ms | 8,087ms | 9,306ms 
| **fast-csv** | 112ms | 963ms | 1,104ms | 9,947ms | 11,498ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 46ms | 82ms | 454ms | 824ms 
| **csvtojson** | 33ms | 248ms | 331ms | 2,528ms | 3,377ms 
| **csv-parser** | 32ms | 301ms | 338ms | 3,225ms | 3,592ms 
| **papaparse** | 131ms | 59ms | 1,169ms | 554ms | 10,560ms 
| **csv-parse** | 62ms | 546ms | 623ms | 5,551ms | 6,631ms 
| **csv-streamify** | 66ms | 663ms | 769ms | 7,503ms | 8,665ms 
| **fast-csv** | 90ms | 803ms | 935ms | 8,317ms | 9,584ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 23ms | 111ms | 230ms | 1,123ms | 2,360ms 
| **csv-stringify** | 26ms | 115ms | 258ms | 1,166ms | 2,723ms 
| **fast-csv** | 32ms | 139ms | 312ms | 1,402ms | 2,908ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
