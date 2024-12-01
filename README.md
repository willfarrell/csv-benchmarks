# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.6.0 | 10 days ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 4 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 2 years ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 7 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.2 | 10 days ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.2 | 1 month ago | Yes | Yes 
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
| **csv-rex** | 24ms | 179ms | 221ms | 1,822ms | 2,229ms 
| **papaparse** | 41ms | 200ms | 392ms | 1,984ms | 3,933ms 
| **csv-parser** | 40ms | 364ms | 401ms | 3,871ms | 4,258ms 
| **csvtojson** | 57ms | 450ms | 560ms | 4,528ms | 5,622ms 
| **csv-parse** | 77ms | 669ms | 753ms | 6,924ms | 8,215ms 
| **csv-streamify** | 74ms | 723ms | 841ms | 8,141ms | 9,443ms 
| **fast-csv** | 108ms | 943ms | 1,080ms | 9,679ms | 11,734ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 44ms | 79ms | 439ms | 804ms 
| **csvtojson** | 32ms | 245ms | 323ms | 2,482ms | 3,309ms 
| **csv-parser** | 33ms | 308ms | 343ms | 3,311ms | 3,682ms 
| **papaparse** | 128ms | 60ms | 1,157ms | 545ms | 10,411ms 
| **csv-parse** | 59ms | 521ms | 609ms | 5,601ms | 6,448ms 
| **csv-streamify** | 70ms | 708ms | 825ms | 8,054ms | 9,262ms 
| **fast-csv** | 86ms | 759ms | 890ms | 7,983ms | 9,276ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 23ms | 107ms | 224ms | 1,124ms | 2,334ms 
| **csv-stringify** | 26ms | 112ms | 255ms | 1,121ms | 2,460ms 
| **fast-csv** | 29ms | 129ms | 282ms | 1,249ms | 2,779ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
