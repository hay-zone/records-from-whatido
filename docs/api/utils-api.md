# 工具 API

工具 API 提供了一系列实用的辅助函数，帮助您更高效地处理常见的开发任务。本文档介绍所有工具 API 的用法和示例。

## 字符串处理

### capitalize()

将字符串的首字母转换为大写：

```javascript
capitalize('hello') // 'Hello'
```

**参数：**
- `str` (string) - 要处理的字符串

**返回值：**
- 首字母大写的字符串

### trim()

去除字符串两端的空白字符，支持自定义要移除的字符：

```javascript
trim('  hello  ') // 'hello'
trim('--hello--', '-') // 'hello'
```

### slugify()

将字符串转换为 URL 友好的格式：

```javascript
slugify('Hello World!') // 'hello-world'
```

## 数组处理

### unique()

去除数组中的重复元素：

```javascript
unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
```

支持自定义比较函数，可以基于对象的特定属性去重。

### groupBy()

根据指定的键将数组元素分组：

```javascript
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 30 }
]
groupBy(users, 'age')
// { '25': [...], '30': [...] }
```

### chunk()

将数组分割成指定大小的块：

```javascript
chunk([1, 2, 3, 4, 5], 2)
// [[1, 2], [3, 4], [5]]
```

### flatten()

展平嵌套数组，支持指定展平深度：

```javascript
flatten([1, [2, [3, 4]]]) // [1, 2, 3, 4]
flatten([1, [2, [3, 4]]], 1) // [1, 2, [3, 4]]
```

## 对象处理

### deepClone()

深度克隆对象或数组，包括所有嵌套的属性：

```javascript
const original = { a: 1, b: { c: 2 } }
const cloned = deepClone(original)
```

克隆后的对象与原对象完全独立，修改互不影响。

### merge()

深度合并多个对象：

```javascript
merge(
  { a: 1, b: { x: 1 } },
  { b: { y: 2 }, c: 3 }
)
// { a: 1, b: { x: 1, y: 2 }, c: 3 }
```

### pick()

从对象中挑选指定的属性：

```javascript
pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])
// { a: 1, c: 3 }
```

### omit()

从对象中排除指定的属性：

```javascript
omit({ a: 1, b: 2, c: 3 }, ['b'])
// { a: 1, c: 3 }
```

## 函数处理

### debounce()

创建一个防抖函数，延迟执行：

```javascript
const debouncedFn = debounce(() => {
  console.log('执行')
}, 300)
```

适合处理频繁触发的事件，如窗口调整大小、输入框输入等。

### throttle()

创建一个节流函数，限制执行频率：

```javascript
const throttledFn = throttle(() => {
  console.log('执行')
}, 1000)
```

确保函数在指定时间间隔内最多执行一次。

### memoize()

创建一个记忆函数，缓存计算结果：

```javascript
const fibonacci = memoize(n => {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
})
```

## 日期处理

### formatDate()

格式化日期为指定格式的字符串：

```javascript
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
```

支持多种日期格式模板。

### parseDate()

解析日期字符串为 Date 对象，支持多种日期格式。

## 验证函数

### isEmail()

验证是否为有效的电子邮件地址。

### isURL()

验证是否为有效的 URL。

### isPhoneNumber()

验证是否为有效的手机号码，支持多种国家格式。

这些工具函数经过充分测试和优化，可以安全地在生产环境中使用。它们能够显著减少重复代码，提高开发效率。
