---
title: Vue 3 学习笔记
date: 2026-01-12
tags:
  - Vue
  - 前端
  - 技术
categories:
  - 技术
description: Vue 3 核心概念和常用技巧总结
cover: https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030
recommend: 1
---

# Vue 3 学习笔记

## Composition API

Vue 3 引入了 Composition API，让代码组织更加灵活。

### setup 函数

```javascript
import { ref, reactive } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const state = reactive({
      name: '小刘'
    })

    function increment() {
      count.value++
    }

    return {
      count,
      state,
      increment
    }
  }
}
```

## 响应式系统

Vue 3 使用 Proxy 重写了响应式系统，性能更好。

## 总结

Vue 3 带来了很多改进，值得学习！
