let loaderUtils=require('loader-utils');

function loader(source){
    //style-loader中导出一个脚本
    let str=`
        let style=document.createElement("style");
        style.innerHTML=${JSON.stringify(source)};
        document.head.appendChild(style);
    `;
    return str;
}
loader.pitch=function(remainingRequest){//剩余的请求
    //require返回的路径就是css-loader处理好的结果
    let str=`
        let style=document.createElement("style");
        style.innerHTML=require(${loaderUtils.stringifyRequest(this,'!!'+remainingRequest)});
        document.head.appendChild(style);
    `;
}
module.exports=loader;