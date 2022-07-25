import Papa from "papaparse";

export const parse = () => Papa.parse(Papa.NODE_STREAM_INPUT, {delimiter:",", newline:"\r\n", quoteChar:'"', header: false})
export const format = () => Papa.unparse(Papa.NODE_STREAM_INPUT)

export default { parse, format }
