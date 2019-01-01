var mongogodb = require('mongodb');

// 创建服务对象
var server = new mongogodb.Server('localhost',27017,{auto_reconnect:true});

var db = new mongogodb.Db('html5',server,{safe:true});

db.open((err,database)=>{
    database.collection('user',(err,coll)=>{
        coll.find({}).toArray((err,data)=>{
            console.log(data);
            database.close()
        })
    })
});
