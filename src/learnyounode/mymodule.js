// My Solution

const fs = require('fs')

function filterList(dirPath, fileExt, callback) {    
    fs.readdir(dirPath, (err, data) => {
        if (err) {return callback(err)}

        const reg = RegExp(`(?<=\\.)${fileExt}`)
        const filteredList = data.filter(file => reg.test(file))
        callback(null, filteredList)
    })
}


module.exports = filterList


// Node School Solution

// 'use strict'
// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
