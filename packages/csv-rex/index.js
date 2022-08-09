import { csvParseStream, csvFormatStream } from '@datastream/csv'

export const parse = () => csvParseStream({delimiterChar:",", newlineChar:"\r\n", quoteChar:'"', header: false})
export const format = () => csvFormatStream({header:false})

export default { parse, format }
