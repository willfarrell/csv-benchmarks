# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.6 | 6 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 4 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 1 year ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 7 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.1 | 3 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.2 | 9 days ago | Yes | Yes 
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
| **csv-rex** | 27ms | 176ms | 215ms | 1,780ms | 2,153ms 
| **papaparse** | 41ms | 207ms | 402ms | 2,044ms | 4,011ms 
| **csv-parser** | 38ms | 345ms | 378ms | 3,683ms | 4,039ms 
| **csvtojson** | 57ms | 450ms | 561ms | 4,538ms | 5,588ms 
| **csv-parse** | 77ms | 672ms | 749ms | 6,787ms | 7,891ms 
| **csv-streamify** | 73ms | 699ms | 806ms | 7,792ms | 8,897ms 
| **fast-csv** | 105ms | 916ms | 1,071ms | 9,503ms | 11,060ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 45ms | 80ms | 450ms | 789ms 
| **csvtojson** | 32ms | 244ms | 324ms | 2,486ms | 3,298ms 
| **csv-parser** | 32ms | 295ms | 327ms | 3,140ms | 3,521ms 
| **papaparse** | 128ms | 59ms | 1,154ms | 551ms | 10,331ms 
| **csv-parse** | 57ms | 508ms | 619ms | 5,521ms | 6,386ms 
| **csv-streamify** | 67ms | 674ms | 780ms | 7,655ms | 8,811ms 
| **fast-csv** | 86ms | 766ms | 893ms | 7,971ms | 9,289ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 108ms | 224ms | 1,102ms | 2,284ms 
| **csv-stringify** | 26ms | 113ms | 256ms | 1,120ms | 2,558ms 
| **fast-csv** | 30ms | 130ms | 293ms | 1,269ms | 2,929ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
