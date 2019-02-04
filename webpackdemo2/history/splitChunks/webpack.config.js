let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let webpack=require('webpack');
//let Happypack=require('happypack')
module.exports={
    mode:'production',
    optimization:{
        splitChunks:{//分割代码块
            cacheGroups:{//缓冲组
                common:{
                    chunks:'initial',
                    minSize:0,//抽离模块最小是0
                    minChunks:2//表示用过2次以上就要抽离
                },
                vendor:{
                    priority:1,//相当于权重，先抽离第三方模块
                    test:/node_modules/,
                    chunks:'initial',
                    minSize:0,//抽离模块最小是0
                    minChunks:2//表示用过2次以上就要抽离
                }
            }
        }
    },
    entry:{
        index:'./src/index.js',
        other:'./src/other.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        port:3000,
        open:true,
        contentBase:'./dist'
    },
    module:{
        noParse:'/jquery/',//不去解析设置的包所依赖的关系
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                include:path.resolve('src'),
                //use:'Happypack/loader?id=js'
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
                // use:'Happypack/loader?id=css'
            }
        ]
    },
    plugins:[
        // new Happypack({
        //     id:'css',
        //     use:['style-loader','css-loader']
        // }),
        // new Happypack({
        //     id:'js',
        //     use:[
        //         {
        //             loader:'babel-loader',
        //             options:{
        //                 presets:[
        //                     '@babel/preset-env',
        //                     '@babel/preset-react'
        //                 ]
        //             }
        //         }
        //     ]
        // }),
        // new webpack.DllReferencePlugin({
        //     manifest:path.resolve(__dirname,'dist','manifest.json')
        // }),
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        })
    ]
}