import csvtojson from 'csvtojson'
import jsontocsv from 'jsontocsv'

export const parse = () => csvtojson({noheader: true})
export const format = () => jsontocsv()

export default { parse, format }
