# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.0 | 6 days ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 3 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.2 | 6 days ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 3 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 5 months ago | Yes |  
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
| **csv-rex** | 37ms | 284ms | 339ms | 2,864ms | 3,412ms 
| **papaparse** | 62ms | 306ms | 605ms | 3,097ms | 5,878ms 
| **csv-parser** | 62ms | 605ms | 634ms | 6,483ms | 6,815ms 
| **csvtojson** | 81ms | 688ms | 787ms | 6,901ms | 7,928ms 
| **csv-parse** | 114ms | 998ms | 1,126ms | 10,336ms | 11,676ms 
| **csv-streamify** | 140ms | 1,325ms | 1,522ms | 14,710ms | 16,625ms 
| **fast-csv** | 182ms | 1,621ms | 1,841ms | 17,305ms | 18,852ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 15ms | 71ms | 132ms | 706ms | 1,289ms 
| **csvtojson** | 48ms | 400ms | 463ms | 4,043ms | 4,666ms 
| **csv-parser** | 52ms | 508ms | 536ms | 5,432ms | 5,733ms 
| **papaparse** | 194ms | 84ms | 1,785ms | 809ms | 15,897ms 
| **csv-parse** | 91ms | 811ms | 942ms | 8,580ms | 9,887ms 
| **csv-streamify** | 120ms | 1,206ms | 1,398ms | 13,720ms | 15,767ms 
| **fast-csv** | 149ms | 1,332ms | 1,510ms | 14,054ms | 15,875ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 33ms | 154ms | 313ms | 1,565ms | 3,221ms 
| **csv-stringify** | 36ms | 175ms | 353ms | 1,684ms | 3,537ms 
| **fast-csv** | 41ms | 204ms | 415ms | 2,017ms | 4,002ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
