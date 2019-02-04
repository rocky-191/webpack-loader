//webpack是node写法
let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let MiniCssExtractPlugin=require('mini-css-extract-plugin');
let UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let webpack =require('webpack');
module.exports={
    devServer:{//开发服务器的配置
        port:3000,
        progress:true,
        contentBase:'./build',
        compress:true,
    },
    optimization: {//优化项
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,//并发打包
                sourceMap: true // set to true if you want JS source maps
            }),//开发环境下不压缩js，想启用压缩功能，需要把mode切换为production
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    mode:'development',//模式分两种development,production,
    entry:'./src/index.js',//入口文件
    output:{
        filename:'bundle.[hash:8].js',//打包后的文件名
        path:path.resolve(__dirname,'build'),//路径必须是一个绝对路径
    },
    externals:{
        jquery:'$'
    },
    plugins:[//存放webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true
            },
            hash:true
        }),
        new MiniCssExtractPlugin({
            filename:'css/main.css'
        }),
        new OptimizeCSSAssetsPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        }),
        new webpack.ProvidePlugin({//在每个模块中注入$
            '$':'jquery'
        })
    ],
    module:{
        rules:[
            // {
            //     test:/\.js$/,
            //     use:{
            //         loader:'eslint-loader',
            //         options:{
            //             enforce:'pre'//previous强制在js转换前执行，post后面执行
            //         }
            //     },
            // },
            {
                test:/\.js$/,//normal
                use:{
                    loader:'babel-loader',
                    options:{//es6->es5
                        presets:[
                            '@babel/preset-env'
                        ],
                        plugins:[
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "corejs": false,
                                    "helpers": true,
                                    "regenerator": true,
                                    "useESModules": false
                                }
                            ]
                        ]
                    },
                },
                include:path.resolve(__dirname,'src'),
                exclude:/node_modules/
            },
            //loader顺序从右往左执行
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test:/(.png|.jpg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:50*1024,
                        outputPath:'images/',
                        //publicPath:''
                    }
                }
            }
        ]
    }
}