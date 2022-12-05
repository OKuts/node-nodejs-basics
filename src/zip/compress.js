import {pipeline} from 'stream'
import {createReadStream, createWriteStream} from 'fs'
import {createGzip} from 'zlib'

import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))


const compress = async (from, to) => {
  pipeline (
    createReadStream(from),
    createGzip(),
    createWriteStream(to),
    err => {
      if (err) console.log(err.message)
    }
  )
}

await compress(`${__dirname}/files/fileToCompress.txt`, `${__dirname}/files/archive.gz`)
