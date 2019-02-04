let path=require('path');
let fs=require('fs');
let babylon=require('babylon');
let traverse=require('@babel/traverse').default;
let t=require('@babel/types');
let generator=require('@babel/generator').default;
//依赖模块
//babylon将源码转成ast
// @babel/traverse
// @babel/types
// @babel/generator
class Compiler{
    constructor(config){
        //entry output
        this.config=config;
        //保存入口文件的路径
        this.entryId;
        //保存所有模块的依赖
        this.modules={};
        this.entry=config.entry;//入口路径
        //工作路径
        this.root=process.cwd();
    }
    getSource(modulePath){
        let content=fs.readFileSync(modulePath,'utf8');
        return content;
    }
    //解析源码
    parse(source,parentPath){
        let ast=babylon.parse(source);
        traverse(ast,{

        })
    }
    buildModule(modulePath,isEntry){
        let source=this.getSource(modulePath);
        //获取相对路径
        let moduleName='./'+path.relative(this.root,modulePath);
        if(isEntry){
            this.entryId=moduleName;//保存入口名字
        }
        //把source源码进行改造，返回一个依赖列表
        let {sourceCode,dependencies}=this.parse(source,path.dirname(moduleName));
        //把相对路径和模块内容对应起来
        this.modules[moduleName]=sourceCode;
    }
    emitFile(){

    }
    run(){
        //执行，创建模块依赖关系
        this.buildModule(path.resolve(this.root,this.entry),true);//true代表是主模块

        //打包后的文件
        this.emitFile();
    }
}

module.exports=Compiler;