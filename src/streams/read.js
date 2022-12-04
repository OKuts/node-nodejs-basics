import { createReadStream } from 'fs'
import {pipeline} from 'stream'
import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const read = async (dirname, filename) => {
  const readStream = createReadStream(`${__dirname}/${filename}`)

  pipeline (
    readStream,
    process.stdout,
    err => {
      if (err) console.log(err.message)
    }
  )
}

await read(__dirname, 'files/fileToRead.txt')
