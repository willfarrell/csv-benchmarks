import Papa from "papaparse";

export const parse = () => Papa.parse(Papa.NODE_STREAM_INPUT, {delimiter:",", newline:"\r\n", quoteChar:'"', header: false})
export const format = false // () => Papa.unparse(Papa.NODE_STREAM_OUTPUT)

export default { parse, format }
