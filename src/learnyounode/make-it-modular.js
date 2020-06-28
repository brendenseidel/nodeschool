// My Solution

const mymodule = require('./mymodule')

const dirPath = process.argv[2]
const fileExt = process.argv[3]

mymodule(dirPath, fileExt, (err, data) => {
    if (err) {console.error('Error: ', err)}
    
    data.forEach(file => {
        console.log(file)
    });
});


// Node School Solution

// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })