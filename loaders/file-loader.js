let loaderUtils=require('laoder-utils');

function loader(source){
    let filename=loaderUtils.interpolateName(this,'[hash].[ext]',{content:source});
    this.emitFile(filename,source);
    return `module.exports="${filename}"`;
}

loader.row=true;
module.exports=loader;