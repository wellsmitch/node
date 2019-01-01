var EventEmitter = require('events');

//EventEmitter - 类   原型上  提供两种方法 on(进行事件,数据接收)  emit(进行事件,数据推送)

class Person extends EventEmitter{}

//实例化
var person = new Person();
person.on('play',(data)=>{
    console.log(data)
});
// person.once('play',(data)=>{
//     console.log(data)
// });

person.emit('play','hello');
person.emit('play','你好');

