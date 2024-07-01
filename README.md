# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.6 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 4 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 1 year ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.0 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.1 | 5 months ago | Yes | Yes 
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
| **csv-rex** | 22ms | 175ms | 220ms | 1,755ms | 2,181ms 
| **papaparse** | 42ms | 197ms | 392ms | 1,949ms | 3,942ms 
| **csv-parser** | 38ms | 350ms | 383ms | 3,691ms | 4,081ms 
| **csvtojson** | 56ms | 439ms | 553ms | 4,406ms | 5,534ms 
| **csv-parse** | 77ms | 660ms | 752ms | 6,818ms | 7,794ms 
| **csv-streamify** | 72ms | 694ms | 799ms | 7,669ms | 8,845ms 
| **fast-csv** | 105ms | 921ms | 1,082ms | 9,647ms | 11,214ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 45ms | 82ms | 449ms | 819ms 
| **csvtojson** | 33ms | 249ms | 329ms | 2,488ms | 3,315ms 
| **csv-parser** | 33ms | 303ms | 344ms | 3,271ms | 3,671ms 
| **papaparse** | 121ms | 59ms | 1,106ms | 545ms | 9,965ms 
| **csv-parse** | 58ms | 520ms | 607ms | 5,439ms | 6,207ms 
| **csv-streamify** | 63ms | 648ms | 756ms | 7,391ms | 8,531ms 
| **fast-csv** | 86ms | 767ms | 901ms | 7,834ms | 9,170ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 106ms | 220ms | 1,062ms | 2,212ms 
| **csv-stringify** | 25ms | 112ms | 246ms | 1,112ms | 2,401ms 
| **fast-csv** | 27ms | 125ms | 277ms | 1,229ms | 2,769ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
