var async = require('async');


//串行无关联
// console.time('times');
// async.series([
//    function (callback) {
//        setTimeout(function () {
//            callback(null,'1')//第一个参数传null代表没有错误
//        },1000)
//    } ,
//     function (callback) {
//         setTimeout(function () {
//             callback(null,'1')//第一个参数传null代表没有错误
//         },2000)
//     },
//     function (callback) {
//         setTimeout(function () {
//             callback(null,'1')//第一个参数传null代表没有错误
//         },3000)
//     }
// ],function (err,data) {
//     console.timeEnd('times');
//     console.log(data)
// });

//并行无关联
// console.time('times1');
// async.parallel([
//     function (callback) {
//         setTimeout(function () {
//             callback(null,'1')//第一个参数传null代表没有错误
//         },1000)
//     } ,
//     function (callback) {
//         setTimeout(function () {
//             callback(null,'1')//第一个参数传null代表没有错误
//         },2000)
//     },
//     function (callback) {
//         setTimeout(function () {
//             callback(null,'1')//第一个参数传null代表没有错误
//         },3000)
//     }
// ],function (err,data) {
//     console.timeEnd('times1');
//     console.log(data)
// });

//串行有关联
async.waterfall([
    function (callback) {
        setTimeout(function () {
            callback(null,'1')//第一个参数传null代表没有错误
        },0)
    } ,
    function (a,callback) {
        setTimeout(function () {
            callback(null,a,'2')//第一个参数传null代表没有错误
        },0)
    },
    function (a,b,callback) {
        setTimeout(function () {
            callback(null,[a,b,'3'])//第一个参数传null代表没有错误
        },0)
    }
],function (err,data) {
    console.log(data)
});
