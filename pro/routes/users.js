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
    console.log(req.body)
    // console.log(req.body);
    // mongodb.connect(db_str,(err,database)=>{
    //     database.collection('svg',(err,coll)=>{
        
    //         coll.find({}).toArray((err,data)=>{
    //             res.send(data);
    //             database.close()
    //         })
    //     })
    // })
});

//上传图片
router.post('/pic', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.file)
    // var _files = req.files.pics;
	// var item ,_name ,_tmp;
	// item = _files, _name=item.name;
	// if (_name && item.path) {//这里需要判断文件名称和路径是否为空
	// 	var tmpPath = item.path, type = item.type ,extension_name = '',
	// 	tmp_name = (Date.parse(new Date()) / 1000) + '' + (Math.round(Math.random() * 9999));//生成随机名称
	// 	switch (type) {	//判断文件类型
	// 		case 'image/pjpeg': extension_name = 'jpg';  break;
	// 		case 'image/jpeg': extension_name = 'jpg'; break;
	// 		case 'image/gif': extension_name = 'gif'; break;
	// 		case 'image/png': extension_name = 'png'; break;
	// 		case 'image/x-png': extension_name = 'png'; break;
	// 		case 'image/bmp': extension_name = 'bmp'; break;
	// 		default: if(_name.indexOf('.')<=0) return;//其他文件则默认上传
	// 			else {
	// 				_tmp = _name.split('.');
	// 				extension_name = _tmp[_tmp.length-1]; break;
	// 		}
	// 	}
	// 	tmp_name = tmp_name + '.' + extension_name,
	// 	targetPath = 'public/upload/' + tmp_name,//设置上传路径
	// 	is = fs.createReadStream(tmpPath),
	// 	os = fs.createWriteStream(targetPath);
	// 	util.pump(is, os, function() { 
	// 		fs.unlinkSync(tmpPath); 
    //         console.log('upload success : ',targetPath);
	// 		res.json({//设置返回值
	// 			error : 0,
	// 			url : 'upload/' + tmp_name,
	// 			title : tmp_name,
	// 			message : tmp_name
	// 		});
	// 	});
	// };
});



module.exports = router;
