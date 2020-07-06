const http = require('http')
let urls = []
let counter = null

// get the urls
for (let i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

// create an empty collection for the results
const results = new Array(urls.length)

urls.forEach((url, i) => {
  http.get(url, res => {
    let outStr = ''
    res.on('error', console.error)
    res.setEncoding('utf-8')
    res.on('data', data => outStr += data)
    res.on('end', () => {
        results[i] = outStr
        counter++
        if (counter === urls.length) {
          results.forEach(outStr => console.log(outStr))
        }
    })
  })
})


// Node School Solution
// I actually like my solution more

// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
