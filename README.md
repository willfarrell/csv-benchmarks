# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.4 | 1 day ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.2 | 5 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.3 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 11 months ago | Yes |  
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
| **csv-rex** | 32ms | 236ms | 301ms | 2,380ms | 3,020ms 
| **papaparse** | 58ms | 273ms | 565ms | 2,721ms | 5,716ms 
| **csv-parser** | 51ms | 442ms | 508ms | 4,770ms | 5,489ms 
| **csvtojson** | 74ms | 571ms | 722ms | 5,740ms | 7,414ms 
| **csv-parse** | 99ms | 836ms | 975ms | 8,695ms | 10,041ms 
| **csv-streamify** | 99ms | 943ms | 1,100ms | 10,382ms | 12,089ms 
| **fast-csv** | 149ms | 1,283ms | 1,504ms | 13,287ms | 15,520ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 12ms | 55ms | 110ms | 550ms | 1,108ms 
| **csvtojson** | 43ms | 314ms | 424ms | 3,140ms | 4,288ms 
| **csv-parser** | 43ms | 389ms | 462ms | 4,204ms | 4,811ms 
| **papaparse** | 179ms | 79ms | 1,569ms | 740ms | 14,129ms 
| **csv-parse** | 74ms | 653ms | 779ms | 7,110ms | 8,402ms 
| **csv-streamify** | 86ms | 870ms | 1,022ms | 9,825ms | 11,495ms 
| **fast-csv** | 119ms | 1,046ms | 1,229ms | 10,822ms | 13,376ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 31ms | 133ms | 299ms | 1,336ms | 3,025ms 
| **csv-stringify** | 34ms | 135ms | 333ms | 1,370ms | 3,347ms 
| **fast-csv** | 38ms | 154ms | 369ms | 1,568ms | 3,680ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
