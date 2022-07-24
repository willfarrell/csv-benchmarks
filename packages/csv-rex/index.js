import { csvParseStream, csvFormatStream } from '@datastream/csv'

export const parse = csvParseStream
export const format = csvFormatStream

export default { parse, format }
