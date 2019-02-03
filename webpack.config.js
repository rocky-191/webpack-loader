let path=require('path');

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool:'source-map',
    //watch:true,
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
                    loader:'loader1'
                },
                enforce:'pre'
            },
            {
                test:/\.js$/,
                use:{
                    loader:'loader2'
                }
            },
            {
                test:/\.js$/,
                use:{
                    loader:'loader3'
                },
                enforce:'post'
            }
        ]
    }
}