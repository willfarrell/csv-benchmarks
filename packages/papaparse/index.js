import Papa from "papaparse";

export const parse = () => Papa.parse(Papa.NODE_STREAM_INPUT)
export const format = () => Papa.unparse(Papa.NODE_STREAM_INPUT)

export default { parse, format }
