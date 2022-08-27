# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.0 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.0 | 0 days ago | Yes | Yes 
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.0 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 3 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 6 months ago | Yes |  
<!-- packages -->

Your preferred CSV package missing? PRs welcome.

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
| **csv-rex** | 42ms | 352ms | 379ms | 3,478ms | 4,149ms 
| **papaparse** | 50ms | 385ms | 444ms | 3,851ms | 4,376ms 
| **csv-parser** | 57ms | 568ms | 577ms | 6,088ms | 6,445ms 
| **csvtojson** | 99ms | 810ms | 843ms | 8,195ms | 9,281ms 
| **csv-parse** | 100ms | 890ms | 966ms | 9,225ms | 11,015ms 
| **fast-csv** | 222ms | 1,962ms | 2,035ms | 18,866ms | 20,844ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 14ms | 87ms | 122ms | 929ms | 1,296ms 
| **papaparse** | 18ms | 84ms | 170ms | 877ms | 1,739ms 
| **csvtojson** | 50ms | 452ms | 519ms | 4,516ms | 5,331ms 
| **csv-parser** | 54ms | 529ms | 535ms | 5,408ms | 5,460ms 
| **csv-parse** | 90ms | 852ms | 916ms | 8,646ms | 9,394ms 
| **fast-csv** | 156ms | 1,439ms | 1,533ms | 14,418ms | 17,720ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-stringify** | 39ms | 219ms | 395ms | 2,086ms | 3,585ms 
| **csv-rex** | 37ms | 208ms | 356ms | 2,066ms | 3,936ms 
| **fast-csv** | 43ms | 251ms | 438ms | 2,441ms | 4,534ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
