import calc from './test';
//import在生产环境下会自动去除无用代码，内置tree-shaking,自动删除无用代码
//node语法require()会把导入模块放到default上面
//let calc=require('./test');
console.log(calc.sum(1,2));


//scope hosting 作用域提升