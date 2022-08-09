import { createReadStream, open } from 'node:fs'

export const benchmark = async (name, func, { cycles, columns, rows }) => {

  try {
    // warm up
    await func();

    const start = process.hrtime.bigint()
    //console.time(`${message}-${name}`)
    for (let i = 0; i < cycles; ++i) {
      await func();
    }
    //console.timeEnd(`${message}-${name}`)
    const elapsed = Number.parseInt((process.hrtime.bigint() - start).toString()) / 1_000_000
    const laptime = (elapsed / cycles)
    console.log(`${columns}x${rows}-${name}: ${laptime.toFixed(4)} ms (${(rows/(laptime/1000)).toFixed(0)} rows/sec) using ${cycles} iterations`);
    return Math.round(laptime)
  } catch (e) {
    console.error(`${name}_${e.message}: crashed`, e);
  }
}

export const parseCsvStream = (fileName, csv) => {
  return new Promise((resolve) => {
    let header = true;
    const data = [];
    createReadStream(fileName)
      .pipe(csv())
    .on("data", (line) => {
        //if (data.length <2)console.log({line})
      if (header) {
        header = false;
      } else {
        data.push(line);
      }
    })
      .on("end", () => {
        resolve(data);
      })
      .on("finish", () => {
        resolve(data);
      });
  });
}

export const formatCsvStream = (array, csv) => {
  return new Promise((resolve) => {
    let header = true;
    const data = [];
    createReadStream(fileName)
    .pipe(csv())
    .on("data", (line) => {
      //if (data.length <2)console.log({line})
      if (header) {
        header = false;
      } else {
        data.push(line);
      }
    })
    .on("end", () => {
      resolve(data);
    })
    .on("finish", () => {
      resolve(data);
    });
  });
}