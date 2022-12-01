# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.3 | 3 days ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.2 | 3 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 5 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.3 | 1 day ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 3 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 9 months ago | Yes |  
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
| **csv-rex** | 37ms | 301ms | 345ms | 3,038ms | 3,446ms 
| **papaparse** | 60ms | 319ms | 575ms | 3,228ms | 5,775ms 
| **csv-parser** | 56ms | 548ms | 566ms | 5,871ms | 6,068ms 
| **csvtojson** | 80ms | 688ms | 780ms | 6,910ms | 7,875ms 
| **csv-parse** | 110ms | 1,002ms | 1,089ms | 10,097ms | 11,662ms 
| **csv-streamify** | 130ms | 1,279ms | 1,459ms | 14,139ms | 16,225ms 
| **fast-csv** | 182ms | 1,637ms | 1,841ms | 17,051ms | 19,170ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 14ms | 72ms | 123ms | 722ms | 1,245ms 
| **csvtojson** | 46ms | 402ms | 454ms | 4,033ms | 4,617ms 
| **csv-parser** | 47ms | 465ms | 487ms | 4,991ms | 5,200ms 
| **papaparse** | 197ms | 82ms | 1,744ms | 782ms | 15,637ms 
| **csv-parse** | 87ms | 781ms | 902ms | 8,238ms | 9,475ms 
| **csv-streamify** | 115ms | 1,161ms | 1,351ms | 13,235ms | 15,215ms 
| **fast-csv** | 144ms | 1,297ms | 1,502ms | 14,087ms | 16,286ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 29ms | 154ms | 283ms | 1,580ms | 2,926ms 
| **csv-stringify** | 36ms | 178ms | 350ms | 1,825ms | 3,414ms 
| **fast-csv** | 41ms | 199ms | 403ms | 2,043ms | 3,944ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
