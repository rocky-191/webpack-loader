
let url='';
if(DEV=='dev'){
    url='开发环境url';
}else{
    url='生产环境url';
}
console.log(url+'----');

// import 'bootstrap';
// import './style';

// let xhr=new XMLHttpRequest();

// //默认是localhost:8080 webpack-dev-server服务，存在跨域问题，需要转发到3000端口
// xhr.open('GET','/user',true);//最后一个参数代表异步请求

// xhr.onload=function(){
//     console.log(xhr.response);
// }

// xhr.send();

// console.log('hello world');

// class Log{
//     constructor(){
//         console.log('log info');
//     }
// }

// let log=new Log();