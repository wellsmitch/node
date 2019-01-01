//https://api.douban.com

const https = require('https');
var http = require('http');

const options = {
    hostname: 'api.douban.com',
    port: 443,
    path: '/v2/movie/top250',
    method: 'GET'
};

var str ='';
var arr =[];
//发起请求
const req = https.request(options, (res) => {
    // console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);

    res.on('data', (d) => {
        // console.log(d.toString());
        str += d;
        // res.write(d);
    });

    res.on('end',()=>{

       var list = JSON.parse(str).subjects;
       list.map((item,i)=>{
           arr.push(item.title)
       })
    })
});



//搭建自己的服务器
var port = 3000;
var hostname = 'localhost';
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'});
    if(req.url!='/favicon.ico'){
        res.write(JSON.stringify(arr));
        res.end()
    }
}).listen(port,hostname,()=>{
    // console.log('服务已经启动')
});



//请求失败
req.on('error', (e) => {
    console.error(e);
});

//结束请求
req.end();
