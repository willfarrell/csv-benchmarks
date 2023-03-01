# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.5 | 3 weeks ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.2 | 6 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.4 | 3 weeks ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 12 months ago | Yes |  
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
| **csv-rex** | 43ms | 328ms | 402ms | 3,278ms | 4,021ms 
| **papaparse** | 76ms | 361ms | 744ms | 3,632ms | 7,326ms 
| **csv-parser** | 64ms | 593ms | 651ms | 6,436ms | 6,934ms 
| **csvtojson** | 95ms | 796ms | 934ms | 7,985ms | 9,338ms 
| **csv-parse** | 126ms | 1,060ms | 1,222ms | 10,935ms | 12,848ms 
| **csv-streamify** | 141ms | 1,356ms | 1,572ms | 15,151ms | 17,457ms 
| **fast-csv** | 211ms | 1,876ms | 2,174ms | 19,405ms | 21,859ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 17ms | 84ms | 149ms | 871ms | 1,517ms 
| **csvtojson** | 53ms | 442ms | 541ms | 4,543ms | 5,461ms 
| **csv-parser** | 55ms | 511ms | 564ms | 5,485ms | 5,998ms 
| **csv-parse** | 98ms | 836ms | 985ms | 8,794ms | 10,558ms 
| **papaparse** | 266ms | 103ms | 2,307ms | 1,043ms | 19,986ms 
| **csv-streamify** | 127ms | 1,258ms | 1,484ms | 14,396ms | 16,749ms 
| **fast-csv** | 165ms | 1,439ms | 1,684ms | 15,127ms | 18,325ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 40ms | 187ms | 390ms | 1,888ms | 3,978ms 
| **csv-stringify** | 42ms | 206ms | 408ms | 2,121ms | 4,273ms 
| **fast-csv** | 48ms | 239ms | 513ms | 2,444ms | 4,926ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
