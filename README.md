# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.4.0 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 2 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.0 | 3 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 3 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 4 months ago | Yes |  
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
| **csv-rex** | 45ms | 349ms | 412ms | 3,579ms | 4,242ms 
| **papaparse** | 87ms | 385ms | 840ms | 3,847ms | 8,138ms 
| **csv-parser** | 69ms | 650ms | 691ms | 6,773ms | 7,563ms 
| **csvtojson** | 102ms | 842ms | 1,014ms | 8,465ms | 9,977ms 
| **csv-parse** | 133ms | 1,134ms | 1,284ms | 11,447ms | 14,251ms 
| **csv-streamify** | 146ms | 1,390ms | 1,578ms | 15,306ms | 17,856ms 
| **fast-csv** | 212ms | 1,884ms | 2,212ms | 20,521ms | 22,784ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 19ms | 97ms | 169ms | 973ms | 1,715ms 
| **csvtojson** | 61ms | 486ms | 577ms | 4,920ms | 6,192ms 
| **csv-parser** | 59ms | 555ms | 623ms | 6,056ms | 6,570ms 
| **csv-parse** | 107ms | 893ms | 1,069ms | 9,731ms | 11,365ms 
| **papaparse** | 277ms | 118ms | 2,503ms | 1,107ms | 22,412ms 
| **csv-streamify** | 133ms | 1,299ms | 1,551ms | 14,976ms | 17,639ms 
| **fast-csv** | 175ms | 1,512ms | 1,741ms | 15,664ms | 18,682ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 43ms | 201ms | 431ms | 2,062ms | 4,447ms 
| **csv-stringify** | 49ms | 234ms | 465ms | 2,491ms | 4,842ms 
| **fast-csv** | 57ms | 275ms | 552ms | 2,734ms | 5,397ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
