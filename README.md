# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.0 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.2 | 2 weeks ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 4 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.0 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 3 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 6 months ago | Yes |  
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
| **csv-rex** | 33ms | 262ms | 308ms | 2,623ms | 3,071ms 
| **papaparse** | 59ms | 297ms | 565ms | 3,003ms | 5,706ms 
| **csv-parser** | 50ms | 446ms | 503ms | 4,847ms | 5,493ms 
| **csvtojson** | 76ms | 583ms | 737ms | 5,826ms | 7,422ms 
| **csv-parse** | 90ms | 762ms | 881ms | 7,798ms | 9,000ms 
| **csv-streamify** | 103ms | 978ms | 1,139ms | 10,902ms | 12,596ms 
| **fast-csv** | 149ms | 1,301ms | 1,502ms | 13,602ms | 15,802ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 12ms | 59ms | 113ms | 596ms | 1,144ms 
| **csvtojson** | 43ms | 311ms | 429ms | 3,171ms | 4,337ms 
| **csv-parser** | 43ms | 386ms | 445ms | 4,206ms | 4,818ms 
| **csv-parse** | 73ms | 636ms | 750ms | 6,629ms | 7,912ms 
| **papaparse** | 179ms | 77ms | 1,584ms | 719ms | 14,285ms 
| **csv-streamify** | 87ms | 867ms | 1,025ms | 9,895ms | 11,524ms 
| **fast-csv** | 123ms | 1,055ms | 1,255ms | 11,126ms | 13,184ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 27ms | 135ms | 267ms | 1,371ms | 2,748ms 
| **csv-stringify** | 33ms | 144ms | 322ms | 1,478ms | 3,366ms 
| **fast-csv** | 37ms | 167ms | 375ms | 1,642ms | 3,888ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
