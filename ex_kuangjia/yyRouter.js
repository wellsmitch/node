var express = require('express');

var app = express();
//路由级别路由
var router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello')
});
router.get('/index',(req,res)=>{
    res.send('hi')
});
app.use('/',router);

app.listen(3000);
