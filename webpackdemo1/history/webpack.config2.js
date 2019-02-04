let path=require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode:'production',
    entry:{
        home:'./src/index.js'
    },
    //devtool:'source-map',//增加源码映射文件，便于调试。标示报错文件行和列，大而全文件
    //devtool:'eval-source-map',//不会产生单独文件，但是可以显示行和列
    //devtool:'cheap-module-source-map',//不会产生列，但是是一个单独的映射文件，用于调试
    devtool:'cheap-module-eval-source-map',//不会产生文件，集成在打包后的文件中，也不会产生列
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