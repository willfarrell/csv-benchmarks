# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.5 | 1 month ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 10 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.6 | 1 month ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.1 | 2 months ago | Yes | Yes 
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
| **csv-rex** | 24ms | 187ms | 233ms | 1,889ms | 2,300ms 
| **papaparse** | 42ms | 208ms | 394ms | 2,084ms | 4,052ms 
| **csv-parser** | 38ms | 344ms | 386ms | 3,675ms | 4,052ms 
| **csvtojson** | 57ms | 446ms | 558ms | 4,463ms | 5,609ms 
| **csv-parse** | 76ms | 652ms | 739ms | 6,652ms | 7,780ms 
| **csv-streamify** | 75ms | 708ms | 815ms | 7,850ms | 8,993ms 
| **fast-csv** | 107ms | 940ms | 1,079ms | 9,715ms | 11,300ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 43ms | 78ms | 430ms | 784ms 
| **csvtojson** | 33ms | 244ms | 320ms | 2,445ms | 3,248ms 
| **csv-parser** | 32ms | 302ms | 340ms | 3,285ms | 3,645ms 
| **papaparse** | 122ms | 58ms | 1,114ms | 541ms | 10,001ms 
| **csv-parse** | 59ms | 521ms | 607ms | 5,344ms | 6,329ms 
| **csv-streamify** | 65ms | 648ms | 743ms | 7,242ms | 8,342ms 
| **fast-csv** | 88ms | 773ms | 904ms | 8,001ms | 9,389ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 109ms | 219ms | 1,093ms | 2,199ms 
| **csv-stringify** | 24ms | 109ms | 238ms | 1,070ms | 2,373ms 
| **fast-csv** | 28ms | 125ms | 269ms | 1,252ms | 2,660ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
