let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let webpack=require('webpack');
//let Happypack=require('happypack')
module.exports={
    mode:'production',
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        hot:true,
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
        }),
        new webpack.NamedModulesPlugin(),//打印更新的模块路径
        new webpack.HotModuleReplacementPlugin()//热更新
    ]
}