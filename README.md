# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.4.0 | 6 days ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 1 day ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.0 | 3 weeks ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 2 months ago | Yes |  
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
| **csv-rex** | 34ms | 269ms | 328ms | 2,731ms | 3,273ms 
| **papaparse** | 59ms | 291ms | 557ms | 2,934ms | 5,673ms 
| **csv-parser** | 55ms | 536ms | 564ms | 5,730ms | 6,006ms 
| **csvtojson** | 78ms | 659ms | 763ms | 6,610ms | 7,698ms 
| **csv-parse** | 110ms | 970ms | 1,091ms | 10,003ms | 11,291ms 
| **csv-streamify** | 132ms | 1,293ms | 1,480ms | 14,431ms | 16,413ms 
| **fast-csv** | 169ms | 1,525ms | 1,745ms | 15,885ms | 18,249ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 13ms | 66ms | 123ms | 662ms | 1,247ms 
| **csvtojson** | 46ms | 386ms | 451ms | 3,883ms | 4,558ms 
| **csv-parser** | 48ms | 470ms | 495ms | 5,018ms | 5,261ms 
| **papaparse** | 189ms | 80ms | 1,710ms | 762ms | 15,144ms 
| **csv-parse** | 86ms | 771ms | 900ms | 8,204ms | 9,589ms 
| **csv-streamify** | 115ms | 1,177ms | 1,364ms | 13,412ms | 15,405ms 
| **fast-csv** | 139ms | 1,245ms | 1,449ms | 13,599ms | 15,873ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 31ms | 147ms | 305ms | 1,509ms | 3,101ms 
| **csv-stringify** | 35ms | 162ms | 333ms | 1,639ms | 3,352ms 
| **fast-csv** | 40ms | 193ms | 392ms | 1,910ms | 3,951ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
