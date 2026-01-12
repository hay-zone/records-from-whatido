# 最佳实践

本文总结了开发过程中的最佳实践和经验建议，帮助您写出更优质、更易维护的代码。

## 代码组织

### 文件结构

建议采用清晰的目录结构组织项目文件：

```
src/
├── assets/         # 静态资源
├── components/     # 可复用组件
├── views/          # 页面组件
├── stores/         # 状态管理
├── router/         # 路由配置
├── utils/          # 工具函数
└── api/            # API 接口
```

### 组件拆分

遵循单一职责原则，将大组件拆分成多个小组件。每个组件应该只负责一个功能，这样更容易测试和维护。

## 命名规范

### 组件命名

使用 PascalCase 命名组件文件和组件名：

```javascript
// 好的命名
MyComponent.vue
UserProfile.vue

// 不好的命名
mycomponent.vue
user-profile.vue
```

### 变量命名

使用有意义的变量名，避免使用单字母或缩写：

```javascript
// 好的命名
const userList = []
const isLoading = false

// 不好的命名
const ul = []
const loading = false
```

## 性能优化

### 使用 v-show 与 v-if

频繁切换显示状态时使用 `v-show`，条件很少改变时使用 `v-if`：

```vue
<!-- 频繁切换 -->
<div v-show="isVisible">内容</div>

<!-- 条件渲染 -->
<div v-if="userRole === 'admin'">管理员面板</div>
```

### 列表渲染优化

使用唯一且稳定的 key 值，避免使用数组索引：

```vue
<!-- 好的做法 -->
<div v-for="item in items" :key="item.id">

<!-- 不好的做法 -->
<div v-for="(item, index) in items" :key="index">
```

### 计算属性缓存

利用计算属性的缓存特性，避免在模板中进行复杂计算：

```vue
<!-- 好的做法 -->
<template>
  <div>{{ formattedPrice }}</div>
</template>

<script setup>
const formattedPrice = computed(() => {
  return '$' + price.value.toFixed(2)
})
</script>

<!-- 不好的做法 -->
<template>
  <div>{{ '$' + price.toFixed(2) }}</div>
</template>
```

## 代码质量

### 避免深层嵌套

过深的嵌套会降低代码可读性，应该提前返回或提取函数：

```javascript
// 好的做法
function processData(data) {
  if (!data) return
  if (!data.valid) return

  // 处理逻辑
}

// 不好的做法
function processData(data) {
  if (data) {
    if (data.valid) {
      // 处理逻辑
    }
  }
}
```

### 使用 ESLint

配置 ESLint 自动检查代码规范，在开发阶段就发现潜在问题。

## 状态管理

### 局部状态优先

不是所有状态都需要放到全局状态管理中。优先使用组件内部状态，只有需要跨组件共享的数据才使用全局状态。

### 状态扁平化

避免过深的嵌套状态结构，保持状态扁平化便于访问和更新。

## 错误处理

### 全局错误处理

配置全局错误处理器，统一处理未捕获的错误：

```javascript
app.config.errorHandler = (err, instance, info) => {
  // 记录错误日志
  console.error(err)
  // 上报到监控服务
  reportError(err)
}
```

### API 错误处理

统一处理 API 请求错误，提供友好的错误提示：

```javascript
async function fetchData() {
  try {
    const response = await api.get('/data')
    return response.data
  } catch (error) {
    showErrorMessage('获取数据失败，请稍后重试')
    console.error(error)
  }
}
```

## 安全性

### 防止 XSS 攻击

避免使用 `v-html` 渲染用户输入的内容，如果必须使用，要先进行安全过滤。

### 敏感信息保护

不要在前端代码中硬编码 API 密钥、密码等敏感信息，使用环境变量管理。

## 测试

### 单元测试

为关键的工具函数和组件编写单元测试，确保代码质量：

```javascript
import { describe, it, expect } from 'vitest'
import { formatDate } from './utils'

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-01')
    expect(formatDate(date)).toBe('2024-01-01')
  })
})
```

### E2E 测试

为关键业务流程编写端到端测试，确保用户路径正常工作。

## 文档

### 代码注释

为复杂的逻辑添加注释说明，帮助其他开发者理解代码意图。但不要过度注释，好的代码应该是自解释的。

### README 文档

每个项目都应该有详细的 README 文档，包括项目介绍、安装步骤、使用方法等。

遵循这些最佳实践，可以显著提升代码质量和开发效率，让项目更容易维护和扩展。
