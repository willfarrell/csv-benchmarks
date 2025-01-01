# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.6.0 | 1 month ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.1.0 | 9 days ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 2 years ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 7 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.2 | 1 month ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 6 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.2 | 2 months ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 2 years ago | Yes |  
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
| **csv-rex** | 24ms | 169ms | 216ms | 1,683ms | 2,087ms 
| **papaparse** | 41ms | 201ms | 403ms | 1,986ms | 4,001ms 
| **csv-parser** | 39ms | 351ms | 388ms | 3,689ms | 4,107ms 
| **csvtojson** | 57ms | 448ms | 560ms | 4,527ms | 5,646ms 
| **csv-parse** | 76ms | 652ms | 745ms | 6,833ms | 7,831ms 
| **csv-streamify** | 74ms | 702ms | 814ms | 7,799ms | 8,961ms 
| **fast-csv** | 106ms | 924ms | 1,076ms | 9,683ms | 11,306ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 43ms | 80ms | 449ms | 809ms 
| **csvtojson** | 33ms | 253ms | 328ms | 2,509ms | 3,306ms 
| **csv-parser** | 32ms | 297ms | 335ms | 3,145ms | 3,571ms 
| **papaparse** | 127ms | 58ms | 1,161ms | 561ms | 10,427ms 
| **csv-parse** | 59ms | 520ms | 608ms | 5,445ms | 6,329ms 
| **csv-streamify** | 64ms | 660ms | 770ms | 7,505ms | 8,689ms 
| **fast-csv** | 87ms | 770ms | 906ms | 8,028ms | 9,308ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 107ms | 221ms | 1,081ms | 2,296ms 
| **csv-stringify** | 26ms | 113ms | 260ms | 1,082ms | 2,477ms 
| **fast-csv** | 29ms | 128ms | 281ms | 1,244ms | 2,740ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
