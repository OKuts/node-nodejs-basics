import {Worker} from 'worker_threads'
import {cpus} from 'os'

import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const performCalculations = async (path) => {
  const coreArr = cpus()
  const workerOut = await Promise.allSettled(coreArr.map((_, i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path, {workerData: i + 10})
      worker.on('message', data => resolve(data))
      worker.on('error', reject)
    })
  }))

  const result = workerOut.map(({status, value}) => (
    status === 'fulfilled'
      ? {status: 'resolved', data: value}
      : {status: 'error', data: null}
  ))

  console.log(result)
}

await performCalculations(`${__dirname}/worker.js`)
