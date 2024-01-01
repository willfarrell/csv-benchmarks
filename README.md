# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.3 | 3 weeks ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 7 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.5 | 3 weeks ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 3 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 9 months ago | Yes |  
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
| **csv-rex** | 24ms | 182ms | 224ms | 1,843ms | 2,227ms 
| **papaparse** | 43ms | 205ms | 404ms | 2,021ms | 3,993ms 
| **csv-parser** | 38ms | 352ms | 389ms | 3,768ms | 4,166ms 
| **csvtojson** | 60ms | 479ms | 593ms | 4,833ms | 5,921ms 
| **csv-parse** | 76ms | 664ms | 759ms | 6,940ms | 7,663ms 
| **csv-streamify** | 73ms | 713ms | 821ms | 7,955ms | 9,107ms 
| **fast-csv** | 105ms | 924ms | 1,074ms | 9,521ms | 10,999ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 44ms | 80ms | 448ms | 815ms 
| **csvtojson** | 33ms | 248ms | 329ms | 2,529ms | 3,312ms 
| **csv-parser** | 35ms | 322ms | 353ms | 3,448ms | 3,775ms 
| **papaparse** | 123ms | 58ms | 1,125ms | 549ms | 10,195ms 
| **csv-parse** | 61ms | 536ms | 627ms | 5,636ms | 6,331ms 
| **csv-streamify** | 63ms | 653ms | 764ms | 7,436ms | 8,633ms 
| **fast-csv** | 88ms | 776ms | 910ms | 8,055ms | 9,395ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 103ms | 220ms | 1,163ms | 2,394ms 
| **csv-stringify** | 26ms | 110ms | 247ms | 1,146ms | 2,610ms 
| **fast-csv** | 31ms | 138ms | 302ms | 1,259ms | 2,847ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
