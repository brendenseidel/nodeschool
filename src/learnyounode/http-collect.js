const http = require('http')

http.get(process.argv[2], res => {
    let outStr = ''
    
    res.on(err, console.error)
    
    res.setEncoding('utf-8')
    res.on('data', data => outStr += data)
    res.on('end', () => {
        console.log(outStr.length)
        console.log(outStr)
    })
})


// Node School

// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })