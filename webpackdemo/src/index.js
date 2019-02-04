// let str=require('./a.js');
// console.log(str);


// console.log('hello world');

require('./index.css');

require('./index.less')


// let fn=()=>{
//     console.log('learn webpack es6 transform es5');
// }

// fn();
// //@log
// class A{
//     a=1;
// }

// let a=new A();
// console.log(a.a);

// function log(target){
//     console.log(target);
// }

//import $ from 'jquery';
// console.log($)

//webpack引入图片方式
//(1)js中创建图片引入
import proto from './images/proto.png';
let image=new Image();
image.src=proto;
document.body.appendChild(image);
//(2)css中引入
//(3)<img src="" >