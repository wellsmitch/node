var url = require('url');

// console.log(url.parse('https://i.csdn.net/#/uc/profile'));

var str = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'i.csdn.net',
    port: null,
    hostname: 'i.csdn.net',
    hash: '#/uc/profile',
    search: null,
    query: null,
    pathname: '/',
    path: '/',
    href: 'https://i.csdn.net/#/uc/profile'
};
// console.log(url.format(str));

// console.log(url.resolve('http:www.baidu.com','/api?id=1'));


