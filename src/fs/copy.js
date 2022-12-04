import {mkdir, readdir, copyFile} from 'node:fs/promises'
import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const copy = async (from, to) => {
  try {
    await mkdir(to)
    const files = await readdir(from, {withFileTypes: true})
    for (const file of files) {
      if (file.isDirectory()) {
        copy(`${from}/${file.name}`, `${to}/${file.name}`)
      } else {
        await copyFile(`${from}/${file.name}`, `${to}/${file.name}`)
      }
    }
  } catch (e) {
    throw new Error('FS operation failed must be thrown')
  }
}

copy(__dirname + '/files', __dirname + '/filesCopy')
