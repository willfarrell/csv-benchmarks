# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.2 | 3 weeks ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 5 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.4 | 3 weeks ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 3 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 7 months ago | Yes |  
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
| **csv-rex** | 35ms | 268ms | 313ms | 2,778ms | 3,162ms 
| **papaparse** | 59ms | 279ms | 552ms | 3,063ms | 5,720ms 
| **csv-parser** | 58ms | 536ms | 572ms | 5,660ms | 5,593ms 
| **csvtojson** | 78ms | 668ms | 764ms | 6,671ms | 7,778ms 
| **csv-parse** | 108ms | 901ms | 1,030ms | 9,284ms | 10,393ms 
| **csv-streamify** | 111ms | 1,072ms | 1,252ms | 12,240ms | 14,103ms 
| **fast-csv** | 167ms | 1,491ms | 2,150ms | 15,450ms | 16,931ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 15ms | 82ms | 137ms | 800ms | 1,238ms 
| **csvtojson** | 56ms | 473ms | 528ms | 3,941ms | 4,796ms 
| **csv-parser** | 49ms | 424ms | 445ms | 5,435ms | 5,474ms 
| **csv-parse** | 75ms | 692ms | 817ms | 7,454ms | 9,536ms 
| **papaparse** | 202ms | 81ms | 1,737ms | 788ms | 18,797ms 
| **csv-streamify** | 102ms | 1,070ms | 1,239ms | 11,615ms | 13,525ms 
| **fast-csv** | 144ms | 1,230ms | 1,472ms | 11,808ms | 14,373ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 33ms | 154ms | 369ms | 1,670ms | 2,921ms 
| **csv-stringify** | 34ms | 172ms | 351ms | 1,789ms | 3,640ms 
| **fast-csv** | 44ms | 201ms | 395ms | 2,138ms | 4,302ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
