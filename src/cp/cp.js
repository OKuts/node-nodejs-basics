import {spawn} from 'child_process'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const spawnChildProcess = async (file, args) => {

  const childProcess = spawn('node',[file, ...args.split(' ')])

  process.stdin.on('data', data => {
    childProcess.stdin.write(data)
  })

  childProcess.stdout.on('data', data => {
    console.log(data.toString())
  })
}

spawnChildProcess(`${__dirname}/files/script.js`, '-D -v')
