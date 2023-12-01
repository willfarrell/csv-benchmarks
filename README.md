# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.2 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 6 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.4 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 3 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 8 months ago | Yes |  
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
| **csv-rex** | 23ms | 175ms | 212ms | 1,783ms | 2,125ms 
| **papaparse** | 41ms | 212ms | 395ms | 2,084ms | 4,052ms 
| **csv-parser** | 38ms | 353ms | 383ms | 3,803ms | 4,095ms 
| **csvtojson** | 58ms | 464ms | 567ms | 4,642ms | 5,741ms 
| **csv-parse** | 77ms | 654ms | 761ms | 6,926ms | 7,886ms 
| **csv-streamify** | 73ms | 694ms | 806ms | 7,684ms | 8,915ms 
| **fast-csv** | 105ms | 926ms | 1,097ms | 9,796ms | 11,348ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 42ms | 76ms | 441ms | 776ms 
| **csvtojson** | 32ms | 245ms | 322ms | 2,504ms | 3,274ms 
| **csv-parser** | 33ms | 309ms | 338ms | 3,302ms | 3,657ms 
| **papaparse** | 124ms | 57ms | 1,134ms | 541ms | 10,200ms 
| **csv-parse** | 57ms | 511ms | 598ms | 5,415ms | 6,490ms 
| **csv-streamify** | 64ms | 650ms | 762ms | 7,368ms | 8,625ms 
| **fast-csv** | 83ms | 749ms | 871ms | 7,949ms | 9,017ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 20ms | 102ms | 201ms | 1,023ms | 2,018ms 
| **csv-stringify** | 24ms | 110ms | 245ms | 1,081ms | 2,370ms 
| **fast-csv** | 28ms | 128ms | 282ms | 1,291ms | 2,767ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
