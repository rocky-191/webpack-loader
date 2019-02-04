#! /usr/bin/env node

//(1)需要找到当前执行路径，找到webpack.config.js

let path=require('path');

//找到配置文件
let config=require(path.resolve('webpack.config.js'));

let Compiler=require('../lib/Compiler.js');
let compiler=new Compiler(config);

//标示运行编译
compiler.run()