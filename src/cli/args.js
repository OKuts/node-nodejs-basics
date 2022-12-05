const parseArgs = () => {
  const outArr = []
  for (let i = 0; i < process.argv.length; i += 2)
    if (i > 0)  outArr.push(`${process.argv[i].substr(2)} is ${process.argv[i + 1]}`)
  console.log(outArr.join(', '))
}

parseArgs()
