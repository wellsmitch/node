var http = require('http');
var obj = require('./common');
var hostname = 'localhost';
var port = 3000;
http.createServer((req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8');
    res.statusCode = 200;
    if(req.url!='/favicon.ico'){
        console.log(req.url);
        obj.fn(req,res)
        // res.write('hello nodejs');
        // res.write('你好');
        // res.end()
    }

}).listen(port,hostname,()=>{
    console.log('服务已经启动')
});
