---
title:  前端面试题(javaScript)
date: 2021-1-5
categories: 
 - 面试
---
<Boxx type='tip' />


## 数据类型
:unicorn: **基本数据类型**     
字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol（ES6）。    
:unicorn: **引用数据类型**     
对象(Object)、数组(Array)、函数(Function)。

> 注：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

:strawbreey: js拥有动态类型
```js
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串

// 在java中是不被允许的
```

:dolphin: **注意**
```js {7,8}
var arr = [1, 2, 3]
console.log(typeof(add)) //function
console.log(typeof(undefined)) // undefined
console.log(typeof(1)) // number
console.log(typeof('abc')) //  string
console.log(typeof(true)) //  boolean
console.log(typeof(arr)) // object
console.log(typeof(null)) // object
```

## this 的理解
推荐阅读：   
[Javascript 的 this 用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)   
this 是JavaScript语言中的宇哥关键字，它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。 


## apply 和 call
推荐阅读：   
[apply()与call()的区别](https://www.cnblogs.com/lengyuehuahun/p/5643625.html)   




