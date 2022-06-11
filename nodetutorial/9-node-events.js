console.log('events')
var fs = require('fs');
var rs = fs.createReadStream('./mynewfile1.txt');
console.log('still reading 1');
rs.on('open', function () {
  console.log('The file is open');
});

console.log('still reading 2');
rs.close();
rs.on('close', function () {
  console.log('The file is closed');
});