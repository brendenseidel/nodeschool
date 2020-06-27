const fs = require('fs')

// const buf = fs.readFileSync(process.argv[2]);
// const lines = buf.toString().split('\n').length - 1

const lines = fs.readFileSync(process.argv[2], 'utf-8').split('\n').length - 1

console.log(lines)