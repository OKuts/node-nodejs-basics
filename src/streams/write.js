import {createWriteStream} from 'fs'
import {pipeline} from 'stream'
import {fileURLToPath} from 'url'
import path, {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const write = async (dir, filename) => {
  const writeStream = createWriteStream(path.resolve(dir, filename))

  pipeline(
    process.stdin,
    writeStream,
    err => {
      if (err) console.log(err.message)
    }
  )

  console.log('For write text to file, input anything to console and press ENTER')
}

await write(__dirname, 'files/fileToWrite.txt')
