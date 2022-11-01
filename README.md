# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.1 | 3 weeks ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.2 | 2 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.0 | 4 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 3 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 8 months ago | Yes |  
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
| **csv-rex** | 33ms | 264ms | 311ms | 2,643ms | 3,142ms 
| **papaparse** | 62ms | 299ms | 577ms | 3,063ms | 5,897ms 
| **csv-parser** | 50ms | 441ms | 507ms | 4,771ms | 5,496ms 
| **csvtojson** | 78ms | 591ms | 755ms | 5,906ms | 7,570ms 
| **csv-parse** | 97ms | 818ms | 1,048ms | 9,215ms | 10,628ms 
| **csv-streamify** | 103ms | 973ms | 1,138ms | 10,852ms | 12,572ms 
| **fast-csv** | 149ms | 1,298ms | 1,523ms | 13,330ms | 15,580ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 14ms | 59ms | 117ms | 604ms | 1,171ms 
| **csvtojson** | 42ms | 310ms | 421ms | 3,131ms | 4,209ms 
| **csv-parser** | 42ms | 377ms | 440ms | 4,129ms | 4,782ms 
| **papaparse** | 175ms | 75ms | 1,571ms | 706ms | 14,265ms 
| **csv-parse** | 74ms | 645ms | 792ms | 7,127ms | 8,501ms 
| **csv-streamify** | 87ms | 882ms | 1,038ms | 10,086ms | 11,787ms 
| **fast-csv** | 121ms | 1,046ms | 1,243ms | 10,925ms | 12,890ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 30ms | 137ms | 302ms | 1,403ms | 3,059ms 
| **csv-stringify** | 33ms | 145ms | 325ms | 1,452ms | 3,227ms 
| **fast-csv** | 38ms | 172ms | 379ms | 1,758ms | 3,719ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
