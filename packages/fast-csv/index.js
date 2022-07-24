import { parse as csvParse, format as csvFormat } from 'fast-csv'

export const parse = csvParse
export const format = csvFormat

export default { parse, format }
