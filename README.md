# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.9 | 0 days ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.5.1 | 1 month ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.3.3 | 0 days ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 1 month ago | Yes |  
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
| **csv-rex** | 34ms | 272ms | 323ms | 2,740ms | 3,270ms 
| **papaparse** | 57ms | 290ms | 546ms | 2,949ms | 5,452ms 
| **csv-parser** | 55ms | 537ms | 565ms | 5,773ms | 6,001ms 
| **csvtojson** | 78ms | 659ms | 764ms | 6,604ms | 7,712ms 
| **csv-parse** | 110ms | 969ms | 1,082ms | 9,985ms | 11,174ms 
| **csv-streamify** | 133ms | 1,299ms | 1,483ms | 14,475ms | 16,456ms 
| **fast-csv** | 178ms | 1,547ms | 1,766ms | 16,218ms | 18,563ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 13ms | 65ms | 117ms | 637ms | 1,173ms 
| **csvtojson** | 45ms | 380ms | 446ms | 3,874ms | 4,609ms 
| **csv-parser** | 46ms | 457ms | 476ms | 4,871ms | 5,101ms 
| **papaparse** | 189ms | 79ms | 1,678ms | 738ms | 15,066ms 
| **csv-parse** | 87ms | 786ms | 953ms | 8,696ms | 9,690ms 
| **csv-streamify** | 117ms | 1,190ms | 1,372ms | 13,591ms | 15,514ms 
| **fast-csv** | 138ms | 1,249ms | 1,427ms | 13,566ms | 15,894ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 28ms | 145ms | 272ms | 1,459ms | 2,783ms 
| **csv-stringify** | 35ms | 161ms | 338ms | 1,680ms | 3,297ms 
| **fast-csv** | 39ms | 185ms | 372ms | 1,880ms | 3,776ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
