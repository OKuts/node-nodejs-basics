import {createHash} from 'crypto'
import {readFile} from 'node:fs/promises'
import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const calculateHash = async () => {
  try {
    const content = await readFile(__dirname + '/files/fileToCalculateHashFor.txt')
    const hash = createHash('sha256').update(content)
    console.log(hash.digest('hex'))
  } catch (err) {
    throw err
  }
};

await calculateHash()
