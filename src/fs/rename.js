import {rename as rn} from 'node:fs/promises'
import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const rename = async (path, name) => {
  try {
    const fileName = name.substr(0, name.lastIndexOf('.'))
    await rn(`${path}/${name}`, `${path}/${fileName}.md`)
  } catch (e) {
    throw new Error('FS operation failed must be thrown')
  }
};

await rename(`${__dirname}/files`, 'wrongFilename.txt')
