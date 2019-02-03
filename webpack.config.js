let path=require('path');

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool:'source-map',
    watch:true,
    resolveLoader:{
        modules:['node_modules',path.resolve(__dirname,'loaders')]
        // alias:{
        //     loader1:path.resolve(__dirname,'loaders','loader1.js')
        // }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'banner-loader',//给文件中添加设置的注释
                    options:{
                        text:'mgl',
                        filename:path.resolve(__dirname,'banner.js')//模版文件名
                    }
                }
            }
            // {
            //     test:/\.js$/,
            //     use:{
            //         loader:'babel-loader',
            //         options:{
            //             presets:[
            //                 '@babel/preset-env'
            //             ]
            //         }
            //     }
            // }
        ]
        // rules:[
        //     {
        //         test:/\.js$/,
        //         use:{
        //             loader:'loader1'
        //         },
        //         enforce:'pre'
        //     },
        //     {
        //         test:/\.js$/,
        //         use:{
        //             loader:'loader2'
        //         }
        //     },
        //     {
        //         test:/\.js$/,
        //         use:{
        //             loader:'loader3'
        //         },
        //         enforce:'post'
        //     }
        // ]
    }
}