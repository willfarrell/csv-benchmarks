import { AsyncParser } from 'json2csv'

export const parse = false
export const format = () => new AsyncParser().processor

export default { parse, format }
