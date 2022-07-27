---
title:  Vue组件间的传值方式
date: 2021-3-2
tags:
 - Vue

categories: 
 - Vue
---

<Boxx type='tip' content='温故知新' />
:dolphin: **复习一下Vue组件间的传值方式** 
[推荐阅读](https://blog.csdn.net/qq_34775038/article/details/105922459)       
## 父传子
 
- props 的方式
父组件调用子组件的时候，绑定动态属性(data或methods),然后子组件用属性props接收。

    

:chestnut: 举个例子

子组件 HelloWorld
```vue {10,11,12}
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```

父组件
```vue {5}
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HelloWorld :msg= 'massage'   />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      massage: '您好！'
    }
  },
}
</script>
```


## 子传父

- this.$emit(event, [agrs]) 自定义事件的方式   
子组件
```vue {4,21}
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <input type="button" value="点击触发" @click="childClick">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      childInfo: '我是子组件的数据'
    }
  },
  methods: {
    childClick(){
      this.$emit('transmit', this.childInfo)
    }
  },
}
</script>
```
父组件
``` vue {5}
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HelloWorld :msg= 'massage'  @transmit='getChildInfo' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      massage: '父传子'
    }
  },
  methods: {
    getChildInfo(value){
      this.massage = value
    }
  },
}
</script>
```

## 兄弟组件

使用Bus发布订阅模式，应用于子传父或者任意非子父组件

Bus.js
```js
import Vue from 'vue'

export default new Vue()
```


brother.vue     
```vue {26}
<template>
  <div>
      <p>嘿，兄弟我要给你这个数据：{{ msg }}</p>
      <button @click="handle">点击触发</button>
  </div>
</template>

<script>

import Bus from '../assets/Bus'
export default {
  data () {
    return {
        msg: '1111111'
    };
  },

  components: {},

  computed: {},

  

  methods: {
      handle(){
          Bus.$emit('sendMsg',this.msg)
      }
  }
}
```
sister.vue
```vue {22}
<template>
  <div>
      <p>哥们，我收到的是：{{ info }}</p>
  </div>
</template>

<script>

import Bus from '../assets/Bus'
export default {
  data () {
    return {
        info: ''
    };
  },

  components: {},

  computed: {},

  mounted() {
      Bus.$on('sendMsg', value=>{
              this.info = value
          })
  }
}

```


