import { createReadStream } from 'fs'
import {pipeline} from 'stream'
import { fileURLToPath } from 'url'
import path, {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const read = async (dir, filename) => {

  const readStream = createReadStream(path.resolve(dir, filename))

  pipeline (
    readStream,
    process.stdout,
    err => {
      if (err) console.log(err.message)
    }
  )
}

await read(__dirname, 'files/fileToRead.txt')


