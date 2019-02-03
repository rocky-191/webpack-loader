# webpack-loader
webpack中loader自定义，配置学习

## loader配置
### loader执行顺序
默认是从右到左，从下到上。

```
{
     test:/\.js$/,
     use:['loader3','loader2','loader1']
}
```
上面loader执行顺序就是loader1-loader2-loader3

```
{
    test:/\.js$/,
    use:'loader1'
},
{
    test:/\.js$/,
    use:'loader2'
},
{
    test:/\.js$/,
    use:'loader3'
}
```
上面loader执行顺序就是loader3-loader2-loader1

### loader分类
（1）pre 在前面的loader  
（2）post 在后面的loader  
（3）normal 正常loader  
（4）inline 行内loader  
```
module:{
    rules:[
        {
            test:/\.js$/,
            use:'loader1',
            enforce:'pre'
        },
        {
            test:/\.js$/,
            use:'loader2'
        },
        {
            test:/\.js$/,
            use:'loader3',
            enforce:'post'
        }
    ]
}
```
上面loader执行顺序就是loader1-loader2-loader3  
loader默认是由两部分组成，分别是pitch和normal

## loader特点
1. 第一个loader要返回js脚本  
1. 每个loader只做一件事，为了使loader在更多场景链式调用  
1. 每一个loader都是一个模块  
1. 每个loader都是无状态的，确保loader在不同模块转换之间不保存状态