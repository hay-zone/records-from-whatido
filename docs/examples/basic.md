# 基础示例

本章节提供了一系列基础示例，帮助您快速理解和掌握框架的核心概念和基本用法。每个示例都包含完整的代码和详细的说明。

## Hello World

最简单的示例，展示如何创建一个基本的应用：

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
</script>
```

这个示例演示了模板语法和响应式数据的基本用法。`message` 是一个响应式引用，当它的值改变时，视图会自动更新。

## 计数器应用

经典的计数器示例，展示事件处理和状态更新：

```vue
<template>
  <div>
    <p>当前计数: {{ count }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => count.value++
const decrement = () => count.value--
const reset = () => count.value = 0
</script>
```

通过这个示例，您可以学习如何处理用户交互和更新组件状态。

## 表单输入绑定

展示如何使用 `v-model` 实现双向数据绑定：

```vue
<template>
  <div>
    <input v-model="text" placeholder="请输入文字">
    <p>您输入的是: {{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
</script>
```

`v-model` 是表单输入的语法糖，简化了输入处理的代码。

## 条件渲染

使用 `v-if`、`v-else-if` 和 `v-else` 进行条件渲染：

```vue
<template>
  <div>
    <button @click="toggle">切换</button>
    <p v-if="show">这段文字可以显示或隐藏</p>
    <p v-else>当前是隐藏状态</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
const toggle = () => show.value = !show.value
</script>
```

## 列表渲染

使用 `v-for` 渲染列表数据：

```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, name: '项目1' },
  { id: 2, name: '项目2' },
  { id: 3, name: '项目3' }
])
</script>
```

每个列表项都需要一个唯一的 `key` 属性，以便框架高效地更新列表。

## 计算属性

展示如何使用计算属性派生数据：

```vue
<template>
  <div>
    <input v-model="firstName" placeholder="名">
    <input v-model="lastName" placeholder="姓">
    <p>全名: {{ fullName }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const firstName = ref('')
const lastName = ref('')
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})
</script>
```

计算属性会自动缓存结果，只有依赖的数据变化时才会重新计算。

## 侦听器

使用 `watch` 监听数据变化：

```vue
<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('')

watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    answer.value = '思考中...'
    // 模拟异步操作
    setTimeout(() => {
      answer.value = '这是答案'
    }, 1000)
  }
})
</script>
```

这些基础示例涵盖了框架的核心功能，掌握它们是学习更高级特性的基础。建议您亲自运行这些示例，修改代码观察效果，加深理解。
