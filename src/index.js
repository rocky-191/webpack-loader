
//-! 不会让文件在通过pre+normal loader去处理
// ！没有normal loader去处理
// !! 什么都不要别的loader，只保留inline-loader
// let str=require('-!inline-loader!./a.js');

// console.log('hello world');

class A{
    constructor(){
        this.name='mgl';
    }
    getName(){
        return this.name;
    }
}

let a=new A();
console.log(a.getName());