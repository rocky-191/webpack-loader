let path=require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode:'production',
    entry:{
        home:'./src/index.js'
    },
    watch:true,
    watchOptions:{//监听选项
        poll:1000,//每秒问我1000次，是否打包
        aggregateTimeout:500,//防抖
        ignored:/node_modules///不需要监控的文件
    },
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ]
}