import { createWriteStream } from "node:fs";
import { stat } from "node:fs/promises";
import { finished } from "node:stream/promises";
import { once } from "node:events";

const cache = {}

export const generateCSVFile = async ({ readableFileName, columns, rows, quotes }) => {
  try {
    await stat(readableFileName)
    return
  } catch(e) {
    if (e.code !== 'ENOENT') throw e
  }
  const file = createWriteStream(readableFileName, { encoding: "utf8" });
  const writeLine = async (line) => {
    if (!file.write(line)) {
      await once(file, "drain");
    }
  }
  
  const wrapper = quotes ? '"' : ''
  const delimiter = quotes ? '","' : ','
  await writeLine(wrapper + Array.from({ length: columns + 1 }, (_, x) => `col${x}`).join(delimiter) + wrapper + '\r\n')
  for (let y = 0; y < rows; y++) {
    await writeLine(wrapper + Array.from({ length: columns + 1 }, (_, x) => `${x}x${y}`).join(delimiter) + wrapper + '\r\n')
  }
  file.end();
  finished(file)
}

export const generateCSVArray = ({ columns, rows, quotes }) => {
  if (cache[`array_${columns}x${rows}_quotes=${quotes}`]) {
    return cache[`array_${columns}x${rows}_quotes=${quotes}`]
  }
  const arr = []
  for (let y = 0; y < rows; y++) {
    arr.push(Array.from({ length: columns + 1 }, (_, x) => `${x}x${y}`))
  }
  return arr
}
