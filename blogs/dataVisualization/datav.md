---
title: DataV
date: 2021-3-1
categories: 
 - 数据可视化
---
<Boxx type='tip' />
DataV是一款大屏数据展示组件库，有Vue、React版本。

:dolphin: 我们们可以先查看 [官方的demo](http://datav-react.jiaminghi.com/demo/)，然后在根据业务的需要设计出自己的大屏数据显示。

## 官网demo1
施工养护综合数据       
[演示地址](http://datav-react.jiaminghi.com/demo/construction-data/index.html)  
[源码地址](https://github.com/DataV-Team/datav-react.jiaminghi.com/tree/master/demo/construction-data)    


## 状态更新
开发时遇到从后端拿取得数据赋值给 config 时，发现页面数据并不刷新，但config确实已经改变了。
```js
this.config.data = res.data
```
:dolphin: 问题在于： 组件props均未设置deep监听， [DataV用前必看](http://datav.jiaminghi.com/guide/#%E7%94%A8%E5%89%8D%E5%BF%85%E7%9C%8B)

