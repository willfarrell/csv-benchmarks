# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.4.0 | 1 month ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 1 month ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.0 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 3 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 3 months ago | Yes |  
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
| **csv-rex** | 44ms | 346ms | 410ms | 3,483ms | 4,133ms 
| **papaparse** | 71ms | 372ms | 669ms | 3,823ms | 6,792ms 
| **csv-parser** | 76ms | 738ms | 777ms | 7,991ms | 8,376ms 
| **csvtojson** | 100ms | 829ms | 956ms | 8,265ms | 9,605ms 
| **csv-parse** | 142ms | 1,239ms | 1,392ms | 12,812ms | 14,491ms 
| **csv-streamify** | 168ms | 1,627ms | 1,898ms | 18,207ms | 20,809ms 
| **fast-csv** | 214ms | 1,915ms | 2,182ms | 19,957ms | 23,328ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 17ms | 80ms | 151ms | 803ms | 1,513ms 
| **csvtojson** | 57ms | 468ms | 565ms | 4,635ms | 5,669ms 
| **csv-parser** | 63ms | 607ms | 655ms | 6,548ms | 7,066ms 
| **papaparse** | 225ms | 96ms | 2,031ms | 908ms | 18,162ms 
| **csv-parse** | 109ms | 985ms | 1,137ms | 10,448ms | 12,018ms 
| **fast-csv** | 182ms | 1,633ms | 1,902ms | 17,234ms | 19,957ms 
| **csv-streamify** | 150ms | 1,531ms | 1,784ms | 17,455ms | 20,094ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 34ms | 179ms | 328ms | 1,819ms | 3,324ms 
| **csv-stringify** | 42ms | 198ms | 401ms | 1,969ms | 4,015ms 
| **fast-csv** | 48ms | 242ms | 481ms | 2,410ms | 4,788ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
