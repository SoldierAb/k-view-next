

module.exports = function (source){
    // ----------- md-loader -----------
    
    // 1. markdown 转换
    //  1.1 dom 转换
    //  1.2 锚点 转换
    //  1.3 图片静态资源 PUBLIC_PATH 注入

    // 2. 代码块转换
    //  2.1 <code src="./demos/basic.vue" /> ===> <router-view name="basic" />
    //  2.2 源码文本读取
    //  2.3 demoBox 组件插槽集成

    // 3.输出vue组件String Buffer
    return `<template>${source}</template>`
}