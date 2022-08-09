# Contributing

In the spirit of Open Source Software, everyone is very welcome to contribute to this repository. Feel free to [raise issues](https://github.com/willfarrell/csv-benchmarks/issues) or to [submit Pull Requests](https://github.com/willfarrell/csv-benchmarks/pulls).

Before contributing to the project, make sure to have a look at our [Code of Conduct](/.github/CODE_OF_CONDUCT.md).

## Requirements
For a package to be includes within the benchmark it must meet **all** of the following criteria:
- [ ] >100k downloads/week *or* place in the top 5 for parse or format
- [ ] latest version released in the last 2 year
- [ ] supports NodeJS Streams

### Implementation Checklist

- [ ] dependency version is strict
- [ ] folder name matches package name
- [ ] `index.js` exports `parse` and `format` (set to false if not supported)
- [ ] `parse` and `format` must return a NodeJS writable stream

## Licence

Licensed under [MIT Licence](LICENSE). Copyright (c) 2022 [will Farrell](https://github.com/willfarrell), and the [csv-rex team](https://github.com/willfarrell/csv-benchmarks/graphs/contributors).
