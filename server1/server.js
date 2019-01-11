var http = require('http');
var hostname = '172.16.10.19';
//npm i supervisor -g

var port = 3000;
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'});
    if(req.url!='/favicon.ico'){
        res.write('hello nodejs');
        res.write('你8好');
        res.end()
    }
}).listen(port,hostname,()=>{
    console.log('服务已经启动')
});
