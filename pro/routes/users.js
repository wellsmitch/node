var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var db_str = 'mongodb://localhost:27017/html5';
var fs = require('fs');
var formidable = require("formidable");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登录
router.post('/login', function(req, res, next) {
    console.log(req.body);
    // 是否允许发送Cookie，ture为运行
    res.header("Access-Control-Allow-Credentials", true);
//     // 允许来自所有域名请求
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-requested-with");
//   // 设置所允许的HTTP请求方法
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");    
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
    // res.header("Access-Control-Allow-Origin", "*");
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

// svg
router.post('/svg', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    mongodb.connect(db_str,(err,database)=>{
        database.collection('svg',(err,coll)=>{
            coll.remove({});
            coll.insert(req.body,(err)=>{
                res.send(req.body);
                database.close()
            })
        })
    })
});

// svg
router.post('/svgpost', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // console.log(req.body);
    mongodb.connect(db_str,(err,database)=>{
        database.collection('svg',(err,coll)=>{
        
            coll.find({}).toArray((err,data)=>{
                res.send(data);
                database.close()
            })
        })
    })
});

//上传图片
router.post('/pic', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Content-Type", "application/jpg;charset=utf-8");

    // console.log(req)
    var form = new formidable.IncomingForm();
    form.uploadDir = "./public/upload/temp/"; //改变临时目录
    // console.log(req)
    form.parse(req, function(error, fields, files) {
        for (var key in files) {
            var file = files[key];
            var fName = (new Date()).getTime();
            switch (file.type) {
            case "image/jpeg":
                fName = fName + ".jpeg";
                break;
            case "image/jpg":
                fName = fName + ".jpg";
                break;    
            case "image/png":
                fName = fName + ".png";
            break;
            default:
                fName = fName + ".png";
            break;
            }
            console.log(file, file.size);
            var uploadDir = "./public/upload/" + fName;
            fs.rename(file.path, uploadDir, function(err) {
                if (err) {
                    res.write(err + "\n");
                    res.end();
                }
        //res.write("upload image:<br/>");
                res.write("<img src='/upload/" + fName + "' />");
                res.end();
            })
        }
    });
});



module.exports = router;
