import {readdir} from "node:fs/promises"
import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const list = async (path) => {
  try {
    const files = await readdir(path, {withFileTypes: true})
    for (const file of files) {
      if (file.isDirectory()) {
        await list(`${path}/${file.name}`)
      } else {
        console.log(file.name)
      }
    }
  } catch (e) {
    throw new Error('FS operation failed must be thrown')
  }
};

await list(`${__dirname}/files`)
