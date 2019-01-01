//服务器文件
var net = require('net');
var server = new net.createServer;

var clentObject = {};

//流水账号 ---用来区分服务器上的客户端
var i = 0;

server.on('connection',(client)=>{
    client.name = ++i;
    clentObject[client.name] = client;
    client.on('data',(data)=>{
        console.log('客户端发来:'+data);
        huifu(client,data)
    })
});

function huifu(client,message){
    // client.write('服务器收到');

    for (let i in clentObject){
        clentObject[i].write(client.name+'说:'+ message)
    }

}

server.listen(3333);


