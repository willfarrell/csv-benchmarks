# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.5.5 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 3 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.7.0 | 11 months ago | Yes | Yes 
| [csv-streamify](https://www.npmjs.com/package/csv-streamify) | 4.0.0 | 6 years ago | Yes |  
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.4.6 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 5 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 5.0.1 | 3 months ago | Yes | Yes 
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
| **csv-rex** | 23ms | 166ms | 210ms | 1,698ms | 2,119ms 
| **papaparse** | 42ms | 198ms | 396ms | 1,984ms | 3,981ms 
| **csv-parser** | 38ms | 348ms | 383ms | 3,686ms | 4,117ms 
| **csvtojson** | 57ms | 450ms | 564ms | 4,547ms | 5,660ms 
| **csv-parse** | 76ms | 661ms | 768ms | 6,915ms | 7,902ms 
| **csv-streamify** | 73ms | 698ms | 807ms | 7,789ms | 8,912ms 
| **fast-csv** | 108ms | 957ms | 1,087ms | 9,826ms | 11,316ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 9ms | 44ms | 81ms | 460ms | 819ms 
| **csvtojson** | 33ms | 250ms | 327ms | 2,557ms | 3,335ms 
| **csv-parser** | 33ms | 309ms | 344ms | 3,348ms | 3,732ms 
| **papaparse** | 125ms | 60ms | 1,138ms | 555ms | 10,141ms 
| **csv-parse** | 59ms | 524ms | 609ms | 5,473ms | 6,408ms 
| **csv-streamify** | 65ms | 651ms | 763ms | 7,386ms | 8,595ms 
| **fast-csv** | 89ms | 798ms | 922ms | 8,413ms | 9,570ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 23ms | 106ms | 226ms | 1,117ms | 2,551ms 
| **csv-stringify** | 28ms | 127ms | 275ms | 1,301ms | 2,451ms 
| **fast-csv** | 29ms | 131ms | 292ms | 1,291ms | 2,917ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
