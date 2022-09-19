# Excluded Packages
| Package | Version | Parse | Format | Reason
|---------|---------|-------|--------|--------
| [dekkai](https://www.npmjs.com/package/dekkai) | 0.3.6 | Yes |  | Crashes with 100k rows
| [exceljs](https://www.npmjs.com/package/exceljs) | 4.3.0 | Yes | Yes | Wrapper around `fast-csv`
| [neat-csv](https://www.npmjs.com/package/neat-csv) | 7.0.0 | Yes |  | Wrapper around `csv-parser`
| [xlsx](https://www.npmjs.com/package/xlsx) | 0.18.5 | Yes |  | Doesn't return transform stream
