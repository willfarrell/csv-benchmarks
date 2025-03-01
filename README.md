# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.6.0 | 3 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.2.0 | 1 month ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 2 years ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 7 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.2 | 3 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 6 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.2 | 4 months ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.5.2 | 1 month ago | Yes |  
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
| **csv-rex** | 24ms | 170ms | 214ms | 1,705ms | 2,149ms 
| **papaparse** | 42ms | 190ms | 394ms | 2,031ms | 4,113ms 
| **csv-parser** | 38ms | 349ms | 385ms | 3,719ms | 4,148ms 
| **csvtojson** | 57ms | 444ms | 555ms | 4,440ms | 5,626ms 
| **csv-parse** | 76ms | 666ms | 740ms | 6,783ms | 7,765ms 
| **csv-streamify** | 74ms | 735ms | 855ms | 8,302ms | 9,574ms 
| **fast-csv** | 106ms | 936ms | 1,081ms | 9,624ms | 11,229ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 43ms | 82ms | 428ms | 815ms 
| **csvtojson** | 33ms | 247ms | 325ms | 2,495ms | 3,300ms 
| **csv-parser** | 33ms | 312ms | 345ms | 3,330ms | 3,712ms 
| **papaparse** | 132ms | 62ms | 1,175ms | 558ms | 10,619ms 
| **csv-parse** | 60ms | 537ms | 624ms | 5,585ms | 6,360ms 
| **csv-streamify** | 68ms | 671ms | 783ms | 7,622ms | 8,848ms 
| **fast-csv** | 86ms | 757ms | 892ms | 7,982ms | 9,239ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 106ms | 221ms | 1,074ms | 2,273ms 
| **csv-stringify** | 25ms | 112ms | 246ms | 1,114ms | 2,478ms 
| **fast-csv** | 29ms | 132ms | 292ms | 1,255ms | 2,834ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
