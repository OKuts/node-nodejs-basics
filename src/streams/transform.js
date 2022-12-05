import {pipeline, Transform} from 'stream'
import {EOL} from 'os'

class Reverse extends Transform {
  constructor() {
    super()
  }
  _transform(chunk, encoding, done) {
    const line = chunk.toString().split(EOL)[0]
    const out = line.split``.reverse().join``
    this.push(out + EOL)
    done()
  }
}

const transform = async () => {
  pipeline (
    process.stdin,
    new Reverse(),
    process.stdout,
    err => {
      if (err) console.log(err.message)
    }
  )
};

await transform()
