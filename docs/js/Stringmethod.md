---
title: JS字符串方法
---

<!-- 查找 -->
## 查找
### indexOf()
```指定字符首次出现的位置 ```
```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.indexOf("China");
```

### lastIndexOf()
```指定字符最后一次出现的位置 ```
```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.lastIndexOf("China");
```

### indexOf()
```indexOf()第一个参数表示要查找指定字符,第二个参数表示从那个位置开始(从头到尾的顺序) ```
```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.indexOf("China",18);
```

### lastIndexOf()
```lastIndexOf()第一个参数表示要查找指定字符,第二个参数表示从那个位置开始(从尾到头的顺序) ```
```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.lastIndexOf("China",50);
```

### search() 
```search() 查找指定字符第一次出现的位置 ```
```js
var str = "The full name of China is the People's Republic of China.";
var pos = str.search("China");
```

<!-- 截取 -->
## 截取
### slice()
```截取7~13的字符 ```
```js
var str = "Apple, Banana, Mango";
var res = str.slice(7,13);
//Banana
```
### substr()
```截取7以后的字符```
```js
var str = "Apple, Banana, Mango";
var res = str.substr(7);
//Banana, Mango
```
### substring()
```substring() 类似于 slice()但是 substring() 无法接受负索引```
```js
var str = "Apple, Banana, Mango";
var res = str.substring(7,13);
//Banana
```

### substr()
```可以不传第二个参数 ```
```js
var str = "Apple, Banana, Mango";
var res = str.substr(7,13);
//Banana
```
<!-- 替换字符 -->
## 替换字符
###  replace()
``` 只会替换首个匹配字符 ,对大小写有区分,/i对大小写不区分,/g 全局搜索替换所有匹配到的字符```
```js
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3School");
//var n = str.replace(/MICROSOFT/i, "W3School"); 
//var n = str.replace(/Microsoft/g, "W3School");
//Please visit W3School and Microsoft!
```
<!-- 大小写转换 -->
## 大小写转换
### toUpperCase()
```js
var text1 = "Hello World!";       // 字符串
var text2 = text1.toUpperCase();  // text2 是被转换为大写的 text1
```
### toLowerCase()
```js
var text1 = "Hello World!";       // 字符串
var text2 = text1.toLowerCase();  // text2 是被转换为小写的 text1
```
<!-- 链接字符串 -->
## 链接字符串
### concat()
```js
var text1 = "Hello";
var text2 = "World";
text3 = text1.concat(" ",text2);
// hello World
``` 
<!-- 删出字符串空格 -->
## 删出字符串空格
### trim()
```js
var str = "       Hello World!        ";
alert(str.trim());
//Hello World! 
```

<!-- 字符串转换数组 -->
## 字符串转换数组
### split()

```js
var txt = "a,b,c,d,e";   // 字符串
txt.split(",");          // 用逗号分隔
txt.split(" ");          // 用空格分隔
txt.split("|");          // 用竖线分隔
```