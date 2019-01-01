var net = require('net');
var readline = require('readline');

var socket = new net.Socket;
var port = 3333;
var hostname = 'localhost';

socket.connect(port,hostname,()=>{
    socket.write('客户端1已登录')
});

socket.on('data',(data)=>{
    console.log('服务器发来:'+data);
    say()
});

var r1 = new readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function say() {
    r1.question('请输入:',(str)=>{
        socket.write(str)
    })
}
