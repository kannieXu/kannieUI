var fs = require('fs')
var readFile = new Promise((resolve,reject) => {
  fs.readFile('./css_conf/mixin.scss', 'utf-8', (err, data) => {
    if(err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
readFile.then((val) => {
  fs.writeFile(require('path').join(__dirname, '../src/styles/user-config.scss'), val)
},(err) => {
  console.log(err)
})