---
title:  前端面试题(Vue Router)
date: 2021-2-6
categories: 
 - 面试
tages:
 - Vue
---

## 如何配置Vue-router 异步加载
```js
routes: [
    path: '/',
    component: ()=> import(
        /* webpackChunkName: 'navigator' */
        './../components/Navigator'
    )
]
```

## Vue router 常用的路由模式
- hash 默认
- H5 history（需要服务端支持）