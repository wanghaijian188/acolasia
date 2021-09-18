---
sidebar: auto
---

# Vue

``` js
//开发环境版本
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
//生产环境版本
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

## 生命周期


## this.$set()
```js
  this.$set( target, key, value )
```
```  target：要更改的数据源(可以是对象或者数组)```
```  key：要更改的具体数据```
```  value ：重新赋的值```
```在控制台能打印出来，但是却没有更新到视图上时，也许这个时候就需要用到this.$set（）这个方法了```