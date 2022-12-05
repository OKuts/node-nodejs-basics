import {pipeline} from 'stream'
import {createReadStream, createWriteStream} from 'fs'
import {createGunzip} from 'zlib'

import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const decompress = async (from, to) => {
  pipeline(
    createReadStream(from),
    createGunzip(),
    createWriteStream(to),
    err => {
      if (err) console.log(err.message)
    }
  )
};

await decompress(`${__dirname}/files/archive.gz`, `${__dirname}/files/fileToCompress.txt`)
