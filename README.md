# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.5 | 2 days ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 9 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.6 | 2 days ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.1 | 2 weeks ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 11 months ago | Yes |  
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
| **csv-rex** | 27ms | 208ms | 259ms | 2,003ms | 2,421ms 
| **papaparse** | 44ms | 220ms | 427ms | 2,218ms | 4,291ms 
| **csv-parser** | 38ms | 346ms | 385ms | 3,702ms | 4,113ms 
| **csvtojson** | 57ms | 449ms | 556ms | 4,488ms | 5,597ms 
| **csv-parse** | 75ms | 650ms | 735ms | 6,650ms | 7,813ms 
| **csv-streamify** | 99ms | 735ms | 822ms | 7,885ms | 9,091ms 
| **fast-csv** | 105ms | 932ms | 1,085ms | 10,150ms | 11,130ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 43ms | 79ms | 447ms | 795ms 
| **csvtojson** | 32ms | 246ms | 325ms | 2,511ms | 3,290ms 
| **csv-parser** | 32ms | 297ms | 334ms | 3,219ms | 3,600ms 
| **papaparse** | 125ms | 57ms | 1,128ms | 541ms | 10,132ms 
| **csv-parse** | 58ms | 512ms | 606ms | 5,509ms | 6,355ms 
| **csv-streamify** | 67ms | 688ms | 798ms | 7,750ms | 8,953ms 
| **fast-csv** | 87ms | 771ms | 904ms | 8,056ms | 9,392ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 104ms | 219ms | 1,041ms | 2,214ms 
| **csv-stringify** | 25ms | 110ms | 244ms | 1,092ms | 2,509ms 
| **fast-csv** | 30ms | 136ms | 299ms | 1,270ms | 2,861ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
