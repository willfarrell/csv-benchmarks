import csvtojson from 'csvtojson'

export const parse = () => csvtojson({noheader: true})
export const format = false

export default { parse, format }
