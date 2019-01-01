//服务器文件 安装ws依赖
var sserver = require('ws').Server;
var wss = new sserver({port:3001});
var clentObject = {};

//流水账号 ---用来区分服务器上的客户端
var i = 0;

wss.on('connection',(client)=>{
    client.name = ++i;
    clentObject[client.name] = client;
    client.on('message',(data)=>{
        console.log('客户端发来:'+data);
        huifu(client,data)
    })
});

function huifu(client,message){
    // client.write('服务器收到');

    for (let i in clentObject){
        clentObject[i].send(client.name+'说:'+ message)
    }

}



