let path = require('path');
let webpack = require('webpack');

module.exports={
    mode:'development',
    entry:{
        react:['react','react-dom']
    },
    output:{
        filename:'_dll_[name].js',
        path:path.resolve(__dirname,'dist'),
        library:'_dll_[name]',
        //libraryTarget:'var',//可选项有commongjs,umd,this,var...等
    },
    plugins:[
        new webpack.DllPlugin({
            name:'_dll_[name]',
            path:path.resolve(__dirname,'dist','manifest.json')
        })
    ]
}