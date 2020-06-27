'use-strict'
const fs = require('fs')

const dirPath = process.argv[2]
const fileExt = process.argv[3]

fs.readdir(dirPath, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        const reg = RegExp(`(?<=\\.)${fileExt}`)
        const filteredList = data.filter(file => reg.test(file))
        filteredList.forEach(file => {
            console.log(file)
        });
    }
})

// NODE SCHOOL SOLUTION
// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })