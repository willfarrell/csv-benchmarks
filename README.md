# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.0 | 3 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.2 | 1 month ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.0 | 3 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 3 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 7 months ago | Yes |  
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
| **csv-rex** | 37ms | 301ms | 346ms | 2,980ms | 3,412ms 
| **papaparse** | 59ms | 314ms | 556ms | 3,164ms | 5,659ms 
| **csv-parser** | 56ms | 536ms | 569ms | 5,731ms | 6,050ms 
| **csvtojson** | 81ms | 675ms | 786ms | 6,812ms | 7,743ms 
| **csv-parse** | 104ms | 842ms | 961ms | 8,792ms | 10,054ms 
| **csv-streamify** | 131ms | 1,268ms | 1,466ms | 14,211ms | 16,366ms 
| **fast-csv** | 171ms | 1,510ms | 1,723ms | 15,765ms | 18,139ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 14ms | 73ms | 127ms | 735ms | 1,286ms 
| **csvtojson** | 45ms | 379ms | 450ms | 3,840ms | 4,508ms 
| **csv-parser** | 49ms | 473ms | 521ms | 5,052ms | 5,377ms 
| **papaparse** | 189ms | 80ms | 1,680ms | 762ms | 15,140ms 
| **csv-parse** | 83ms | 747ms | 867ms | 7,898ms | 9,164ms 
| **fast-csv** | 136ms | 1,209ms | 1,383ms | 12,840ms | 14,466ms 
| **csv-streamify** | 117ms | 1,173ms | 1,364ms | 13,241ms | 15,264ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 28ms | 151ms | 278ms | 1,518ms | 2,840ms 
| **csv-stringify** | 35ms | 174ms | 355ms | 1,730ms | 3,544ms 
| **fast-csv** | 41ms | 204ms | 382ms | 1,986ms | 3,883ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
