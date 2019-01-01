var fs = require('fs');

//函数先执行错误判断 函数第一个参数是错误信息  第二个参数为正常数据
fs.stat('./a.text',(err,data)=>{
    console.log(data.isFile());
    // console.log(err)
});

//创建目录
// fs.mkdir('./log1',()=>{
//     console.log('创建成功')
// });
//写入文件
// fs.writeFile('./log/hello1.log','hello',()=>{
//     console.log('写入成功')
// });
//追加文件内容
// fs.appendFile('./log/hello.log','nihao',()=>{
//     console.log('写入成功')
// });
//读取文件内容
// fs.readFile('./log/hello.log',(err,data)=>{
//     console.log(data.toString())
// });
//读取文件目录
// fs.readdir('./log',(err,data)=>{
//     console.log(data)
// });
// console.log(fs.readdirSync('./log'));
//重命名
// fs.rename('./log/hello1.log','./log/a.log',()=>{
//     console.log('kkk')
// });
//删除文件
// fs.unlink('./log/a.log',()=>{
//
// });
//删除目录   文件全部删完以后方能删除文件件   只能删除空文件夹
// fs.rmdir('./log',()=>{
//
// });
