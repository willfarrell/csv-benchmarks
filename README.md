# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.6.0 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.2.0 | 2 days ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 2 years ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 7 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.2 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 6 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.2 | 3 months ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.5.2 | 4 days ago | Yes |  
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
| **csv-rex** | 24ms | 168ms | 216ms | 1,682ms | 2,159ms 
| **papaparse** | 44ms | 203ms | 416ms | 1,956ms | 4,166ms 
| **csv-parser** | 39ms | 352ms | 390ms | 3,739ms | 4,169ms 
| **csvtojson** | 58ms | 460ms | 564ms | 4,599ms | 5,689ms 
| **csv-parse** | 77ms | 659ms | 752ms | 6,862ms | 7,817ms 
| **csv-streamify** | 75ms | 724ms | 835ms | 8,125ms | 9,328ms 
| **fast-csv** | 110ms | 960ms | 1,112ms | 9,966ms | 11,487ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 45ms | 82ms | 439ms | 819ms 
| **csvtojson** | 33ms | 256ms | 334ms | 2,600ms | 3,401ms 
| **csv-parser** | 35ms | 322ms | 360ms | 3,499ms | 3,873ms 
| **papaparse** | 126ms | 60ms | 1,152ms | 573ms | 10,411ms 
| **csv-parse** | 59ms | 534ms | 619ms | 5,512ms | 6,413ms 
| **csv-streamify** | 65ms | 661ms | 768ms | 7,468ms | 8,677ms 
| **fast-csv** | 90ms | 801ms | 928ms | 8,329ms | 9,607ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 24ms | 111ms | 228ms | 1,133ms | 2,385ms 
| **csv-stringify** | 27ms | 123ms | 265ms | 1,199ms | 2,704ms 
| **fast-csv** | 31ms | 144ms | 310ms | 1,440ms | 3,141ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
