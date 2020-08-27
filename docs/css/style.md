---
sidebar: auto
---

# CSS

## Position(定位)

### static 定位

```css
.ps{ position: static;}
```

### relative  定位

```css
.ps{ position: relative  ;}
```

### absolute 定位

```css
.ps{ position: absolute ;}
```

### sticky 定位

```css
.ps{ position: sticky ;}
```

## Float(浮动)

### 浮动float

```css
.text_line{
    float:left; //左浮动
    float:right; //右浮动
    float:none; //
    float:inherit;//
}
```



### 清除浮动 - 使用 clear

```css
.text_line{
    clear:left;
    clear:right;
    clear:both;
    clear:none;
    clear:inherit;
}
```



## flex

```css
.box{
  display: flex;
}
```

### flex-direction

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### flex-wrap

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### flex-flow

```css
.box {
  flex-flow: <flex-direction> <flex-wrap>;
}
```

### justify-content

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

### align-items

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

### align-content

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```