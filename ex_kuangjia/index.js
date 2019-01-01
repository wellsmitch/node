var express = require('express');


//应用级别路由
var app = express();

app.get('/',(req,res)=>{
    res.send('hello')
});

app.get('/index',(req,res)=>{
    res.send('hi')
});


app.listen(3000);

