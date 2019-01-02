var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var db_str = 'mongodb://localhost:27017/html5';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登录
router.post('/login', function(req, res, next) {
    console.log(req.body);
    // 是否允许发送Cookie，ture为运行
    res.header("Access-Control-Allow-Credentials", true);
    // 允许来自所有域名请求
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-requested-with");
    // 设置所允许的HTTP请求方法
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    // next();
    mongodb.connect(db_str,(err,database)=>{
        database.collection('user',(err,coll)=>{
            coll.find({name:req.body.name,pw:req.body.pw}).toArray((err,data)=>{
              if(data.length>0){
                  req.session.namee = data[0].name;
                  res.send('1');
                  database.close()
              }else{
                  res.send('0');
                  database.close()
              }
            })
        })
    });
});

//注册
router.post('/register', function(req, res, next) {
    console.log(req.body);
    mongodb.connect(db_str,(err,database)=>{
        database.collection('user',(err,coll)=>{
            coll.find({name:req.body.name}).toArray((err,data)=>{
                if(data.length>0){
                    res.send('1');
                    database.close()
                }else{
                    coll.insert(req.body,()=>{
                        res.send('0');
                        database.close()
                    })
                }
            });
            })
        })
    });
//留言
router.post('/liuyan', function(req, res, next) {
    console.log(req.body);
    mongodb.connect(db_str,(err,database)=>{
        database.collection('liuyan',(err,coll)=>{
            coll.insert(req.body,(err)=>{
                res.send('1');
                database.close()
            })
        })
    })
});

//上传图片




module.exports = router;
