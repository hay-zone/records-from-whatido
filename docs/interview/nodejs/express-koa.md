# Express vs Koa

## 1. Express

Node.js 最流行的 Web 框架。

### 特点
- 成熟稳定
- 生态丰富
- 中间件系统

### 基本用法
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
```

## 2. Koa

由 Express 原班人马打造的下一代框架。

### 特点
- 更轻量
- 基于 async/await
- 更好的错误处理

### 基本用法
```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

## 3. 对比

| 特性 | Express | Koa |
|------|---------|-----|
| 异步方式 | 回调 | async/await |
| 中间件 | 回调模式 | 洋葱模型 |
| 体积 | 较大 | 更小 |
| 生态 | 非常丰富 | 逐渐完善 |
