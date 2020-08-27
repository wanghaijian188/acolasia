---
sidebar: auto
---


# javascript

## 查询
### indexOf()
```js
indexOf() //方法返回字符串中指定文本首次出现的索引
lastIndexOf()//方法返回指定文本在字符串中最后一次出现的索引：
``` 
### includes()
```js
 arr.includes(item, from)
```
### find()
```js
arr.find((item, index, array) => {
  // 如果返回 true ，则返回 item ，并停止迭代
  // 对于 falsy ，则返回 undefined
})

arr.findIndex((item, index, array) => {
  // 返回 索引
  // 返回 -1
})
```
### filter()
```js
arr.filter((item, index, array) => {
  // 如果返回 true ，则 push(item)
  // result = newArr 或 []
})
```

## 转换

### map()
```js
// 转换元素
arr.map((item, index, array) => {
  // 返回 转换过的新 item
  // result = newArr
})
```

### reduce()
```js
arr.reduce((accumulator, item, index, array) => {
  // 上次结果 或 初始值
  // ...
  // result 为 最终结果
}, [initial])

// 求和运算
arr.reduce((sum, item) => sum + item, 0)

// 反方向
arr.reduceRight(() => {})
```