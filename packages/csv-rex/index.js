import { Transform } from 'node:stream'
import { makeOptions } from '@datastream/core'

import { parse as fullParse } from 'csv-rex/parse'
import { parse as fastParse } from 'csv-rex/parse-mini'
import { defaultOptions, formatArray, formatObject } from 'csv-rex/format'

export const parse = ({ quotes }) => {
  const parser = quotes ? fullParse : fastParse
  return csvParseStream(parser, {
    delimiterChar: ',',
    newlineChar: '\r\n',
    quoteChar: '"',
    header: false,
  })
}
export const format = () => csvFormatStream({ header: false })

export default { parse, format }

// Source: @datastream/csv
export const csvParseStream = (parse, options) => {
  const { chunkParse, previousChunk } = parse(options)

  const value = {}
  const handlerError = ({ idx, err }) => {
    const { code: id, message } = err
    if (!value[id]) {
      value[id] = { id, message, idx: [] }
    }
    value[id].idx.push(idx)
  }
  const stream = new Transform({
    ...makeOptions(options),
    writeableObjectMode: false,
    readableObjectMode: true,
    transform(chunk, encoding, callback) {
      const enqueue = (row) => {
        if (row.err) {
          handlerError(row)
        } else {
          this.push(row.data)
        }
      }

      chunk = previousChunk() + chunk
      chunkParse(chunk, { enqueue })
      callback()
    },
    flush(callback) {
      const enqueue = (row) => {
        if (row.err) {
          handlerError(row)
        } else {
          this.push(row.data)
        }
      }
      const chunk = previousChunk()
      chunkParse(chunk, { enqueue }, true)
      callback()
    },
  })
  stream.result = () => ({ key: options?.key ?? 'csvErrors', value })
  return stream
}

export const csvFormatStream = (options) => {
  const csvOptions = { ...defaultOptions, ...options }
  csvOptions.escapeChar ??= csvOptions.quoteChar
  let format
  return new Transform({
    ...makeOptions(options),
    writableObjectMode: true,
    readableObjectMode: false,
    transform(chunk, encoding, callback) {
      if (csvOptions.header === true) {
        csvOptions.header = Object.keys(chunk)
      }
      if (typeof format === 'undefined' && Array.isArray(csvOptions.header)) {
        this.push(formatArray(csvOptions.header, csvOptions))
      }
      format ??= Array.isArray(chunk) ? formatArray : formatObject
      this.push(format(chunk, csvOptions))
      callback()
    },
  })
}
