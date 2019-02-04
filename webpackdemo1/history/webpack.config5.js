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
    devServer:{
        //(1)配置跨域代理方式
        // proxy:{
        //     '/api':{
        //         target:'http://localhost:3000',
        //         pathRewrite:{'/api':''}
        //     }
        // }
        //(2)前端单纯mock数据
        // before(app){
        //     app.get('/user',(req,res)=>{
        //         res.json({name:'mgl-before'});
        //     })
        // }
        //(3)有服务端，不用代理来处理，在服务端中启动webpack，用服务端端口
    },
    resolve:{//解析第三方模块
        modules:[path.resolve('node_modules')],
        extensions:['.js','.css','.json']//指定解析后缀名称，从左向右
        // mainFields:['style','main']//指定引入模块的先后顺序
        // mainFiles:[],//指定入口文件的名字，默认是index.js
        // alias:{//配置别名
        //     bootstrap:'bootstrap/dist/css/bootstrap.css'
        // }
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
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new Webpack.DefinePlugin({//用来定义全局环境变量
            DEV:JSON.stringify('dev'),
            FLAG:'true'//
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
        // new CleanWebpackPlugin('./dist'),
        // new CopyWebpackPlugin([
        //     {
        //         from:'./doc',
        //         to:'./'
        //     }//可以写多个，拷贝多个目录文件
        // ]),
        // new Webpack.BannerPlugin('make by mgl 2019-2-1')
    ]
}