var http = require('http');
var hostname = 'localhost';
var url = require('url');
//npm i supervisor -g

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'});
    if(req.url!='/favicon.ico'){
        console.log(12354)
        var path = url.parse(req.url).pathname.replace(/\//,'');
        console.log(path);
        res.end()
    }
}).listen(3000);
