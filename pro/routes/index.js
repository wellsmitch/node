var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var db_str = 'mongodb://localhost:27017/html5';
var ObjectId = require('mongodb').ObjectId;
var async = require('async');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    
    res.render('index', { title: 'Express',name:req.session.namee});
});

//登录
router.get('/login', function(req, res, next) {
    res.render('login', {});
});

//注册
router.get('/register', function(req, res, next) {
    res.render('register', {});
});

// 注销
router.get('/relogin', function(req, res, next) {
   req.session.destroy(function (err) {
       if(err){
           console.log(err)
       }else{
           res.redirect('/')
       }
   })
});

//留言
router.get('/liuyan', function(req, res, next) {

    //页码
    var pageNum = req.query.pageNum;
    pageNum = pageNum ? pageNum : 1;
    //总页数
    var page = 0;
    //每页数量
    var size = 3;
    //总条数
    var count = 0;


    mongodb.connect(db_str,(err,database)=>{
        database.collection('liuyan',(err,coll)=>{
            // coll.find({}).sort({_id:-1}).toArray((err,data)=>{
            //     console.log(data);
            //     res.render('liuyan', {list:data});
            //     database.close()
            // })

            async.series([
                function (callback) {
                    coll.find({}).toArray((err,data)=>{
                        count = data.length;
                        page = Math.ceil(count/size);
                    //    上一页   下一页
                        pageNum = pageNum < 1 ? 1 : pageNum;
                        pageNum = pageNum > page ? page : pageNum;
                        callback(null,'')
                    })
                },
                function (callback) {
                    coll.find({}).sort({_id:-1}).limit(size).skip((pageNum-1) * size).toArray((err,data)=>{
                        callback(null,data)
                    })
                }
            ],function (err,data) {
                res.render('liuyan',{list:data[1],pageNum:pageNum,page:page,size:size,count:count});
                database.close()
            })


        })
    });
});



//留言详情
router.get('/liuyandetail', function(req, res, next) {
    var id = ObjectId(req.query.id);
    mongodb.connect(db_str,(err,database)=>{
        database.collection('liuyan',(err,coll)=>{
            coll.find({_id:id}).toArray((err,data)=>{
                console.log(data[0].con,'0000000');
                res.render('liuyandetail', {detail:data[0].con});
                database.close()
            })
        })
    });
});

module.exports = router;
