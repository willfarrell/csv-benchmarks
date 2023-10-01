# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.0 | 1 month ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 4 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.2 | 1 month ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 4 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 3 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 6 months ago | Yes |  
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
| **csv-rex** | 32ms | 239ms | 299ms | 2,326ms | 3,023ms 
| **papaparse** | 60ms | 263ms | 557ms | 2,694ms | 5,669ms 
| **csv-parser** | 52ms | 462ms | 529ms | 4,946ms | 5,642ms 
| **csvtojson** | 78ms | 588ms | 749ms | 5,787ms | 7,370ms 
| **csv-parse** | 102ms | 860ms | 978ms | 8,737ms | 10,043ms 
| **csv-streamify** | 98ms | 933ms | 1,091ms | 10,387ms | 12,210ms 
| **fast-csv** | 153ms | 1,358ms | 1,546ms | 13,815ms | 15,961ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 12ms | 55ms | 113ms | 545ms | 1,119ms 
| **csvtojson** | 44ms | 320ms | 440ms | 3,222ms | 4,458ms 
| **csv-parser** | 44ms | 399ms | 456ms | 4,285ms | 4,893ms 
| **papaparse** | 178ms | 75ms | 1,576ms | 719ms | 14,007ms 
| **csv-parse** | 76ms | 665ms | 794ms | 7,258ms | 8,731ms 
| **csv-streamify** | 89ms | 875ms | 1,039ms | 9,971ms | 11,678ms 
| **fast-csv** | 123ms | 1,108ms | 1,263ms | 11,575ms | 13,549ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 30ms | 129ms | 295ms | 1,290ms | 3,022ms 
| **csv-stringify** | 34ms | 139ms | 333ms | 1,353ms | 3,392ms 
| **fast-csv** | 39ms | 167ms | 389ms | 1,623ms | 3,801ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
