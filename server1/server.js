var http = require('http');
var hostname = 'localhost';
//npm i supervisor -g

var port = 3000;
http.createServer((req,res)=>{
    // res.header();
    console.log(1111111, req.headers)
    res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*',"Access-Control-Allow-Headers": "content-type"});
    if(req.url!='/favicon.ico'){
        res.write('hello nodejs');
        res.write('你8好');
        res.end()
    }
}).listen(port,hostname,()=>{
    console.log('服务已经启动')
});
