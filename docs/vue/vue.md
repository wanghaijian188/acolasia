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

### beforeCreate
```在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。```
### created
```在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。```
### beforeMount
```在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。```
### mounted
```实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。```
```注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：```
### beforeUpdate
```数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器.该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。```
### updated
```由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。```
```当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。```
```注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick：```

## this.$set()
```js
  this.$set( target, key, value )
```
```  target：要更改的数据源(可以是对象或者数组)```
```  key：要更改的具体数据```
```  value ：重新赋的值```
```在控制台能打印出来，但是却没有更新到视图上时，也许这个时候就需要用到this.$set（）这个方法了```