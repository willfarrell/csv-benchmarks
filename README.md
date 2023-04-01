# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.6 | 4 weeks ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.5.1 | 5 days ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.3.0 | 4 weeks ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 9 days ago | Yes |  
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
| **csv-rex** | 42ms | 315ms | 380ms | 3,157ms | 3,814ms 
| **papaparse** | 68ms | 340ms | 658ms | 3,490ms | 6,544ms 
| **csv-parser** | 65ms | 624ms | 655ms | 6,617ms | 7,013ms 
| **csvtojson** | 92ms | 770ms | 881ms | 7,718ms | 8,919ms 
| **csv-parse** | 132ms | 1,140ms | 1,283ms | 11,819ms | 13,456ms 
| **csv-streamify** | 155ms | 1,519ms | 1,743ms | 17,012ms | 19,386ms 
| **fast-csv** | 208ms | 1,814ms | 2,058ms | 19,054ms | 21,911ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 18ms | 82ms | 142ms | 749ms | 1,404ms 
| **csvtojson** | 53ms | 442ms | 522ms | 4,525ms | 5,373ms 
| **csv-parser** | 56ms | 534ms | 579ms | 5,776ms | 6,126ms 
| **papaparse** | 223ms | 93ms | 2,005ms | 900ms | 18,040ms 
| **csv-parse** | 101ms | 910ms | 1,064ms | 9,633ms | 11,317ms 
| **csv-streamify** | 135ms | 1,368ms | 1,596ms | 15,761ms | 17,962ms 
| **fast-csv** | 168ms | 1,485ms | 1,723ms | 15,534ms | 18,599ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 36ms | 170ms | 356ms | 1,739ms | 3,556ms 
| **csv-stringify** | 40ms | 193ms | 386ms | 1,958ms | 3,810ms 
| **fast-csv** | 46ms | 228ms | 467ms | 2,277ms | 4,585ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
