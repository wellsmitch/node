var querystring = require('querystring');

// var str = querystring.escape('郑州');
// console.log(str);
// console.log(querystring.unescape(str));


var str1 = querystring.parse('name=123&age=1223');
console.log(str1);
var str2 = querystring.stringify(str1);
console.log(str2);
