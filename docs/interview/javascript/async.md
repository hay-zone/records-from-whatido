# JavaScript 异步编程

## 1. 回调函数

最基础的异步处理方式。

```javascript
setTimeout(() => {
  console.log('执行');
}, 1000);
```

## 2. Promise

### 基本用法
```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  if (成功) {
    resolve(result);
  } else {
    reject(error);
  }
});

promise
  .then(result => {})
  .catch(error => {})
  .finally(() => {});
```

### Promise 方法
- `Promise.all()`: 全部完成
- `Promise.race()`: 第一个完成
- `Promise.allSettled()`: 全部结束
- `Promise.any()`: 第一个成功

## 3. Async/Await

基于 Promise 的语法糖。

```javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

## 4. Generator

可以暂停和恢复执行的函数。

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
gen.next(); // { value: 1, done: false }
```
