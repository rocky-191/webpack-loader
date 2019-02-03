let babel=require('@babel/core');
let loaderUtils=require('loader-utils');
function loader(source){
    let options=loaderUtils.getOptions(this);
    let cb=this.async();
    babel.transform(source,{
        ...options,
        sourceMap:true,
        filename:this.resourcePath.split("/").pop()
    },function(err,result){
        cb(err,result.code,result.map);//code就是编译后的代码
    });
}

module.exports=loader