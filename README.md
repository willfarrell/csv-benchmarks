# JavaScript CSV Benchmarks

Benchmarks of popular CSV parsers and formatters:

<!-- packages -->
| Package | Version | Published | Parse | Format 
|---------|---------|-----------|-------|--------
| [csv-parse](https://www.npmjs.com/package/csv-parse) | 5.3.0 | 2 months ago | Yes |  
| [csv-parser](https://www.npmjs.com/package/csv-parser) | 3.0.0 | 2 years ago | Yes |  
| [csv-rex](https://www.npmjs.com/package/csv-rex) | 0.4.2 | 2 weeks ago | Yes | Yes 
| [csv-stringify](https://www.npmjs.com/package/csv-stringify) | 6.2.0 | 2 months ago |  | Yes 
| [csvtojson](https://www.npmjs.com/package/csvtojson) | 2.0.10 | 3 years ago | Yes |  
| [fast-csv](https://www.npmjs.com/package/fast-csv) | 4.3.6 | 2 years ago | Yes | Yes 
| [papaparse](https://www.npmjs.com/package/papaparse) | 5.3.2 | 6 months ago | Yes |  
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
| **csv-rex** | 41ms | 296ms | 355ms | 2,940ms | 3,526ms 
| **papaparse** | 64ms | 314ms | 633ms | 3,290ms | 6,171ms 
| **csv-parser** | 56ms | 538ms | 612ms | 5,717ms | 5,866ms 
| **csvtojson** | 86ms | 704ms | 801ms | 6,926ms | 8,163ms 
| **csv-parse** | 95ms | 877ms | 1,078ms | 8,677ms | 9,671ms 
| **fast-csv** | 167ms | 1,492ms | 1,718ms | 15,687ms | 17,285ms 
<!-- parse quotes=true -->

![Non-Quoted CSV Parser Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/parse_quotes%3Dfalse.png)

<!-- parse quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 14ms | 74ms | 134ms | 821ms | 1,351ms 
| **csvtojson** | 46ms | 375ms | 444ms | 3,801ms | 4,563ms 
| **csv-parser** | 47ms | 427ms | 473ms | 4,654ms | 5,022ms 
| **csv-parse** | 78ms | 672ms | 807ms | 7,016ms | 8,270ms 
| **papaparse** | 206ms | 90ms | 1,841ms | 867ms | 17,064ms 
| **fast-csv** | 129ms | 1,110ms | 1,307ms | 11,568ms | 13,661ms 
<!-- parse quotes=false -->

### Format

![Non-Quoted CSV Formatter Benchmarks](https://github.com/willfarrell/csv-benchmarks/raw/main/results/format_quotes%3Dfalse.png)

<!-- format quotes=false -->
| Package | 10x10K | 100x10K | 10x100K | 100x100K | 10x1000K 
|---------|---|---|---|---|---
| **csv-rex** | 34ms | 153ms | 327ms | 1,492ms | 3,293ms 
| **csv-stringify** | 37ms | 191ms | 364ms | 2,014ms | 3,399ms 
| **fast-csv** | 39ms | 193ms | 389ms | 1,931ms | 4,178ms 
<!-- format quotes=false -->

## Thanks
- leanylabs who inspired the making of this repo with their article [CSV Parsers Comparison](https://leanylabs.com/blog/js-csv-parsers-benchmarks/).
- [quickchart.io](https://quickchart.io) for the automation of the chart creation.
- GitHub for providing free use of Actions for running the benchmarks.
