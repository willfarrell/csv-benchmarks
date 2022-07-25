import { csvParseStream, csvFormatStream } from '@datastream/csv'

export const parse = () => csvParseStream({ header:false })
export const format = () => csvFormatStream()

export default { parse, format }
