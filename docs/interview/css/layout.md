# CSS 布局

## 1. 盒模型

### 标准盒模型
width = content

### IE 盒模型
width = content + padding + border

```css
box-sizing: border-box; /* IE 盒模型 */
box-sizing: content-box; /* 标准盒模型 */
```

## 2. 定位

### static
默认定位。

### relative
相对定位,相对于自身原始位置。

### absolute
绝对定位,相对于最近的非 static 祖先元素。

### fixed
固定定位,相对于视口。

### sticky
粘性定位,结合 relative 和 fixed。

## 3. Flexbox

弹性布局。

```css
.container {
  display: flex;
  justify-content: center; /* 主轴对齐 */
  align-items: center; /* 交叉轴对齐 */
  flex-direction: row; /* 主轴方向 */
}
```

## 4. Grid

网格布局。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
```

## 5. 常见布局

### 水平垂直居中
```css
/* Flexbox */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid */
.container {
  display: grid;
  place-items: center;
}

/* 绝对定位 */
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 两栏布局
左侧固定,右侧自适应。

### 三栏布局
左右固定,中间自适应(圣杯布局、双飞翼布局)。
