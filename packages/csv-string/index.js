import { parse, stringify, createStream } from 'csv-string'

export const parse = () => {
	const stream = createStream()
	stream.on('data', data => {
		parse(data)
	})
	return stream
}
export const format = () => {
	const stream = createStream()
	stream.on('data', data => {
		stringify(data)
	})
	return stream
}

export default { parse, format }
