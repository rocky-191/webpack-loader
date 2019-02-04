//express

let express = require('express');
let webpack=require('webpack');
//引入中间件
let middle=require('webpack-dev-middleware');

let config=require('./webpack.config.js');

let compiler=webpack(config);//webpack处理返回结果

let app=express();
app.use(middle(compiler));

app.get('/user',(req,res)=>{
    res.json({name:'mgl'});
})

app.listen(3000)