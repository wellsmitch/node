var http = require('http');
var hostname = 'localhost';
//npm i supervisor -g

var port = 3000;
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'});
    if(req.url!='/favicon.ico'){
        res.write('hello nodejs');
        res.write('你好');
        res.end();
        //data 代表接收数据
        req.on('data',(data)=>{
            console.log(data.toString())
        });
        //对接收后的数据进行二次处理
        req.on('end',()=>{

        })
    }
}).listen(port,hostname,()=>{
    console.log('服务已经启动')
});
