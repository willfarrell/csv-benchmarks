# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.3 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 8 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.5 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.0 | 3 weeks ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 10 months ago | Yes |  
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
| **csv-rex** | 22ms | 170ms | 214ms | 1,745ms | 2,140ms 
| **papaparse** | 42ms | 208ms | 397ms | 2,071ms | 4,008ms 
| **csv-parser** | 38ms | 352ms | 394ms | 3,786ms | 4,167ms 
| **csvtojson** | 58ms | 468ms | 572ms | 4,710ms | 5,796ms 
| **csv-parse** | 76ms | 673ms | 737ms | 6,715ms | 7,784ms 
| **csv-streamify** | 72ms | 683ms | 788ms | 7,562ms | 8,721ms 
| **fast-csv** | 106ms | 930ms | 1,081ms | 9,745ms | 11,202ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 44ms | 83ms | 454ms | 827ms 
| **csvtojson** | 33ms | 247ms | 328ms | 2,528ms | 3,309ms 
| **csv-parser** | 34ms | 312ms | 346ms | 3,328ms | 3,690ms 
| **papaparse** | 125ms | 60ms | 1,131ms | 544ms | 10,186ms 
| **csv-parse** | 59ms | 524ms | 609ms | 5,545ms | 6,356ms 
| **csv-streamify** | 64ms | 637ms | 739ms | 7,208ms | 8,339ms 
| **fast-csv** | 87ms | 772ms | 900ms | 8,078ms | 9,390ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 23ms | 100ms | 216ms | 1,023ms | 2,264ms 
| **csv-stringify** | 27ms | 116ms | 260ms | 1,183ms | 2,452ms 
| **fast-csv** | 29ms | 132ms | 292ms | 1,383ms | 2,999ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
