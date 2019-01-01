var fs = require('fs');
var zlib = require('zlib');
var count = 0;
// fs.readFile('./a.js',(err,data)=>{
//     console.log(`${++count}-----${data.length}`)//全部读取
// });

var readSteam = fs.createReadStream('a.js');

// readSteam.on('data',(data)=>{
//     console.log(`${++count}-----${data.length}`)//分段读取 可以提升读取速度
// });
//
// readSteam.on('end',()=>{
//     console.log('end')
// });
//
// readSteam.on('error',(err)=>{
//     console.log(err)
// });
//
// readSteam.on('close',()=>{
//     console.log('close')
// });

var writeStream = fs.createWriteStream('jq.js.zip');
readSteam.pipe(zlib.createGzip()).pipe(writeStream);
