import csvParse from 'csv-streamify'

export const parse = () => {
  return csvParse({
    delimiter: ',',
    newline: '\r\n',
    quote: '"'
  })
}
export const format = false

export default { parse, format }
