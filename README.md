# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.6 | 3 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 4 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 1 year ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.5.1 | 5 days ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.1 | 6 months ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.4.1 | 1 year ago | Yes |  
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
| **csv-rex** | 23ms | 179ms | 220ms | 1,773ms | 2,180ms 
| **papaparse** | 41ms | 192ms | 390ms | 2,028ms | 4,001ms 
| **csv-parser** | 39ms | 362ms | 396ms | 3,798ms | 4,215ms 
| **csvtojson** | 56ms | 437ms | 547ms | 4,412ms | 5,536ms 
| **csv-parse** | 76ms | 651ms | 737ms | 6,801ms | 7,741ms 
| **csv-streamify** | 74ms | 707ms | 817ms | 7,803ms | 9,022ms 
| **fast-csv** | 105ms | 920ms | 1,075ms | 9,589ms | 11,178ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 45ms | 80ms | 432ms | 802ms 
| **csvtojson** | 33ms | 250ms | 330ms | 2,521ms | 3,350ms 
| **csv-parser** | 33ms | 309ms | 345ms | 3,281ms | 3,669ms 
| **papaparse** | 127ms | 59ms | 1,158ms | 552ms | 10,372ms 
| **csv-parse** | 61ms | 525ms | 615ms | 5,503ms | 6,381ms 
| **csv-streamify** | 69ms | 698ms | 808ms | 7,911ms | 9,119ms 
| **fast-csv** | 87ms | 754ms | 894ms | 7,964ms | 9,380ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 22ms | 108ms | 225ms | 1,117ms | 2,257ms 
| **csv-stringify** | 25ms | 112ms | 248ms | 1,089ms | 2,386ms 
| **fast-csv** | 27ms | 125ms | 278ms | 1,244ms | 2,860ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
