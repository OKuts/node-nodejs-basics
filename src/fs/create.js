import {writeFile} from 'node:fs/promises'
import { fileURLToPath } from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const content = 'I am fresh and young'

const create = async (fileContent) => {
  try {
    await writeFile(
      `${__dirname}/files/fresh.txt`,
      fileContent,
      {flag: 'wx'})
  } catch (err) {
    throw new Error('FS operation failed must be thrown')
  }
};

await create(content);
