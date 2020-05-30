const { readFileSync, readdirSync } = require('fs')
const path = require('path')

const sourcePath = path.join(
  __dirname,
  '../submodules/30-seconds-of-code/snippets'
)

const sourceFiles = readdirSync(sourcePath).map((x) => path.join(sourcePath, x))

const content = readFileSync(sourceFiles[0], { encoding: 'utf8' })
const tmp = content.split(/---|```(?:js)?/).filter(Boolean)

console.log(tmp.map((x) => x.replace(/^\s+|\s+$/g, '')))

// const snippets = sourceFiles.reduce((acc, file) => {
//   const content = readFileSync(file, { encoding: 'utf8' })

//   console.log(content)
// }, {})
