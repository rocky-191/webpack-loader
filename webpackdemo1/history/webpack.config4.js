let path=require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin= require('copy-webpack-plugin');
let Webpack = require('webpack');
module.exports={
    mode:'production',
    entry:{
        home:'./src/index.js'
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
        }),
        new CleanWebpackPlugin('./dist'),
        new CopyWebpackPlugin([
            {
                from:'./doc',
                to:'./'
            }//可以写多个，拷贝多个目录文件
        ]),
        new Webpack.BannerPlugin('make by mgl 2019-2-1')
    ]
}