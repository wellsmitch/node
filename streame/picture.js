var http = require('http');
var hostname = 'localhost';
var fs = require('fs');

//npm i supervisor -g

var port = 3001;
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'image/png'});
    if(req.url!='/favicon.ico'){
        fs.readFile('./sevenCenter.png','binary',(err,data)=>{
            res.write(data,'binary');
            res.end()
        });
    }
}).listen(port,hostname,()=>{
    console.log('服务已经启动')
});
