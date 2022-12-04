import {readFile} from "node:fs/promises"
import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const read = async (file) => {
  try {
    const content = await readFile(file)
    console.log(content.toString())
  } catch (e) {
    throw new Error('FS operation failed must be thrown')
  }
}

await read(`${__dirname}/files/fileToRead.txt`)
