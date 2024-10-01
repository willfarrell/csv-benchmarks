# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.6 | 5 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 4 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 1 year ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 7 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.1 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.1 | 8 months ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 2 years ago | Yes |  
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
| **csv-rex** | 23ms | 176ms | 214ms | 1,751ms | 2,154ms 
| **papaparse** | 41ms | 196ms | 387ms | 2,083ms | 4,002ms 
| **csv-parser** | 40ms | 368ms | 406ms | 3,880ms | 4,276ms 
| **csvtojson** | 57ms | 452ms | 559ms | 4,566ms | 5,634ms 
| **csv-parse** | 77ms | 659ms | 746ms | 6,810ms | 7,988ms 
| **csv-streamify** | 74ms | 718ms | 828ms | 7,914ms | 9,132ms 
| **fast-csv** | 106ms | 929ms | 1,071ms | 9,615ms | 11,121ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 44ms | 81ms | 447ms | 814ms 
| **csvtojson** | 33ms | 248ms | 329ms | 2,500ms | 3,296ms 
| **csv-parser** | 33ms | 310ms | 344ms | 3,287ms | 3,642ms 
| **papaparse** | 127ms | 60ms | 1,157ms | 539ms | 10,381ms 
| **csv-parse** | 59ms | 526ms | 613ms | 5,614ms | 6,573ms 
| **csv-streamify** | 69ms | 676ms | 786ms | 7,623ms | 8,802ms 
| **fast-csv** | 87ms | 763ms | 895ms | 7,966ms | 9,277ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 106ms | 229ms | 1,086ms | 2,281ms 
| **csv-stringify** | 25ms | 111ms | 246ms | 1,104ms | 2,395ms 
| **fast-csv** | 28ms | 125ms | 278ms | 1,238ms | 2,771ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
