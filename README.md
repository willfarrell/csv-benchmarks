# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.6 | 3 weeks ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 1 year ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.0 | 3 weeks ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.1 | 4 months ago | Yes | Yes 
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
| **csv-rex** | 23ms | 166ms | 214ms | 1,682ms | 2,092ms 
| **papaparse** | 40ms | 195ms | 384ms | 1,971ms | 3,834ms 
| **csv-parser** | 38ms | 346ms | 386ms | 3,651ms | 4,049ms 
| **csvtojson** | 61ms | 478ms | 592ms | 4,784ms | 5,968ms 
| **csv-parse** | 75ms | 649ms | 738ms | 6,766ms | 7,645ms 
| **csv-streamify** | 74ms | 711ms | 820ms | 7,925ms | 9,060ms 
| **fast-csv** | 108ms | 944ms | 1,097ms | 9,744ms | 12,073ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 42ms | 79ms | 432ms | 784ms 
| **csvtojson** | 33ms | 251ms | 390ms | 2,637ms | 3,366ms 
| **csv-parser** | 33ms | 307ms | 344ms | 3,284ms | 3,673ms 
| **papaparse** | 122ms | 58ms | 1,110ms | 526ms | 9,996ms 
| **csv-parse** | 58ms | 507ms | 590ms | 5,334ms | 6,312ms 
| **csv-streamify** | 65ms | 664ms | 774ms | 7,558ms | 8,668ms 
| **fast-csv** | 91ms | 909ms | 939ms | 9,381ms | 10,584ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 107ms | 221ms | 1,085ms | 2,243ms 
| **csv-stringify** | 25ms | 112ms | 252ms | 1,123ms | 2,447ms 
| **fast-csv** | 29ms | 129ms | 284ms | 1,581ms | 3,214ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
