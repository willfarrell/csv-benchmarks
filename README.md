# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.3 | 1 month ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.2 | 4 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.3 | 1 month ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 10 months ago | Yes |  
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
| **csv-rex** | 32ms | 234ms | 295ms | 2,362ms | 2,952ms 
| **papaparse** | 58ms | 264ms | 543ms | 2,689ms | 5,540ms 
| **csv-parser** | 50ms | 445ms | 505ms | 4,794ms | 5,438ms 
| **csvtojson** | 76ms | 572ms | 742ms | 5,735ms | 7,532ms 
| **csv-parse** | 98ms | 842ms | 987ms | 8,609ms | 10,177ms 
| **csv-streamify** | 102ms | 976ms | 1,141ms | 10,851ms | 12,549ms 
| **fast-csv** | 153ms | 1,311ms | 1,538ms | 13,542ms | 15,651ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 12ms | 55ms | 105ms | 546ms | 1,053ms 
| **csvtojson** | 43ms | 309ms | 436ms | 3,124ms | 4,385ms 
| **csv-parser** | 42ms | 379ms | 437ms | 4,105ms | 4,732ms 
| **papaparse** | 178ms | 77ms | 1,562ms | 698ms | 14,099ms 
| **csv-parse** | 74ms | 658ms | 781ms | 7,176ms | 8,537ms 
| **csv-streamify** | 84ms | 846ms | 999ms | 9,606ms | 11,276ms 
| **fast-csv** | 119ms | 1,046ms | 1,237ms | 10,933ms | 13,414ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 28ms | 128ms | 258ms | 1,267ms | 2,624ms 
| **csv-stringify** | 33ms | 137ms | 318ms | 1,392ms | 3,136ms 
| **fast-csv** | 38ms | 156ms | 380ms | 1,580ms | 3,765ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
