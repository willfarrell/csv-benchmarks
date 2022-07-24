import { createReadStream, open } from 'fs/promises'
import { readFile } from "fs/promises";

import dekkai from "dekkai/dist/umd/dekkai.js";

export const parse = async ({fileName}) => {
  const data = [];
  await dekkai.init();
  const table = await dekkai.tableFromLocalFile(open(fileName));
  
  await table.forEach((row) => {
    const arr = [];
    row.forEach((v) => arr.push(v));
    data.push(arr);
  });
  dekkai.terminate();

  return data;
}

export default { parse }
