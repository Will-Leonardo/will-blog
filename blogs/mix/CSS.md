---
title:  前端面试题(CSS)
date: 2021-1-2
categories: 
 - 面试
tages:
 - CSS
---
<Boxx type='tip' />

CSS （Cascading Style Sheet）层叠样式表

## 选择器分类

- 元素选择器 ```a{}```
- 伪元素选择器 ```::before{}```
- 类元素选择器```.headerNav{}```
- id选择器  ```#mainContent{}```
- 属性选择器  ```[type=radio]{}```
- 伪类选择器  ```:hover{}```
- 组合选择器   ```[type=checkbox] + label{}```
- 否定选择器 ```:not(.link){}```
- 通用选择器  ```*{}```

---

## 选择器权重

- ID选择器 #id{}+100
- 类 属性 伪类 +10
- 元素 伪元素 +1
- 其它选择器 +0

!important 优先级最高，相同权重 后写的生效

---

## 非布局样式
CSS中，有很多非布局样式（与布局无关），包括：字体、行高、颜色、大小、背景、边框、滚动、换行、装饰性属性（粗体、斜体、下划线）等。
### 字体

``` css
p{
	font-size: 50px; 		/*字体大小*/
	line-height: 30px;      /*行高*/
	font-family: 幼圆,黑体; 	/*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/
	font-style: italic ;		/*italic表示斜体，normal表示不倾斜*/
	font-weight: bold;	/*粗体*/
	font-variant: small-caps;  /*小写变大写*/
}
```
为了严格保证字在行里面居中，我们的工程师有一个约定： 行高、字号，一般都是偶数。这样可以保证，它们的差一定偶数，就能够被2整除。

---

### 行高
[推荐阅读](https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/01-CSS%E5%B1%9E%E6%80%A7%EF%BC%9A%E5%AD%97%E4%BD%93%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%87%E6%9C%AC%E5%B1%9E%E6%80%A7.md) 

:unicorn: **垂直居中**    
- 单行文本：  设置行高 = 盒子高，就可以保证单行文本垂直居中
- 多行文本：  设置padding = （height - line-height * 行数）/ 2 

或者使用 ``` vertical-align: middle; ```

---

:dolphin: **图片底部3px空隙问题**   
- 原理：img是inline元素，垂直对齐方式vertical-align默认值是baseline，而baseline和底线之间有偏差，偏差视字体大小而定，例如字体的大小是12px，那么缝隙就是3px左右。   

- 解决方案：      
1，将图片的垂直对齐方式vertical-align的值设置为bottom。   
2，将图片display设置为block，并且指定width和height。        
3，设置图片所在的容器元素和width和height与图片一样。      


---

### 边框

:unicorn: **利用边框画三角形**  

demo1(等腰三角形)
```css
#demo {
    width: 0;
    height: 0;
    border: 30px solid red;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid transparent;
}
```

demo2(直角三角形)
```css
#demo2 {
    width: 0;
    height: 0;
    border: 30px solid red;
    border-right: 30px solid transparent;
    border-top: 30px solid transparent;
}
```

---

### 滚动

overflow：visible|hidden|scroll|auto|no-display|no-content;
overflow-x、 overflow-y


### 装饰性属性 

- 字重（粗体）font-weight
- 斜体 font-style:itatic
- 下划线 text-decoration
- 指针 cursor


## CSS真题

### 选择器优先级
- 计算权重确定（id>class>元素）
- !important
- 内联样式
- 后写的优先级高（覆盖前面写的）


### 浮动
[浮动知识点](https://github.com/qianguyihao/Web/blob/master/02-CSS%E5%9F%BA%E7%A1%80/07-%E6%B5%AE%E5%8A%A8.md)



### 如何画一个不占空间的边框
边框的方式：    
- border
- outline（不占空间）
- box-shadow （不占空间）

三者的比较可见《css揭秘》


### 画一个半圆

```css {2,3,6}
.demo {
    width: 500px;
    height: 250px;
    background-color: pink;
    margin: 10px auto;
    border-radius: 500px 500px 0 0;
}
```


