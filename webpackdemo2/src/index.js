import source from './source';

console.log(source);

if(module.hot){
    module.hot.accept('./source.js',()=>{
        let s=require('./source');
        console.log(s);
        console.log('文件更新了')
    })
}