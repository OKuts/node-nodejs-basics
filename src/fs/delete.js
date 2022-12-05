import {rm} from 'node:fs/promises'
import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const remove = async (file) => {
  try {
    await rm(file)
  } catch (e) {
    throw new Error('FS operation failed must be thrown')
  }
};

await remove(`${__dirname}/files/fileToRemove.txt`);
