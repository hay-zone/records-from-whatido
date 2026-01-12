# 核心 API

核心 API 提供了应用程序的基础功能和核心能力。本文档详细介绍所有核心 API 的使用方法和参数说明。

## 初始化 API

### createApp()

创建应用实例的核心方法，这是使用框架的第一步：

```javascript
import { createApp } from 'framework'

const app = createApp({
  // 应用配置选项
})
```

**参数：**
- `options` (Object) - 应用配置对象

**返回值：**
- 应用实例对象

## 生命周期 API

生命周期 API 允许您在应用或组件的不同阶段执行代码。

### onMounted()

在组件挂载到 DOM 后执行的钩子函数：

```javascript
onMounted(() => {
  console.log('组件已挂载')
})
```

### onUpdated()

在组件数据更新后执行的钩子函数，可以在此访问更新后的 DOM。

### onUnmounted()

在组件卸载前执行的钩子函数，用于清理工作如取消订阅、清除定时器等。

## 响应式 API

响应式系统是框架的核心特性，提供了数据变化自动更新视图的能力。

### ref()

创建一个响应式引用，可以包装任何类型的值：

```javascript
const count = ref(0)
count.value++ // 访问和修改值
```

### reactive()

创建一个响应式对象，对象的所有嵌套属性都是响应式的：

```javascript
const state = reactive({
  name: 'John',
  age: 25
})
```

### computed()

创建一个计算属性，基于其他响应式数据自动计算：

```javascript
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})
```

### watch()

监听响应式数据的变化，并执行回调函数：

```javascript
watch(count, (newValue, oldValue) => {
  console.log(`count 从 ${oldValue} 变为 ${newValue}`)
})
```

## 组件 API

### defineComponent()

定义一个组件，提供更好的类型推断支持：

```javascript
const MyComponent = defineComponent({
  name: 'MyComponent',
  props: ['title'],
  setup(props) {
    // 组件逻辑
  }
})
```

### defineProps()

在组合式 API 中定义组件的 props：

```javascript
const props = defineProps({
  title: String,
  count: Number
})
```

### defineEmits()

定义组件可以触发的事件：

```javascript
const emit = defineEmits(['update', 'delete'])
emit('update', newValue)
```

## 工具 API

### nextTick()

在下次 DOM 更新循环结束后执行回调：

```javascript
await nextTick()
// 此时 DOM 已更新
```

### getCurrentInstance()

获取当前组件实例，仅在 setup 或生命周期钩子中有效。

## 渲染 API

### h()

创建虚拟 DOM 节点的函数：

```javascript
import { h } from 'framework'

const vnode = h('div', { class: 'container' }, 'Hello')
```

## 性能优化 API

### markRaw()

标记一个对象为非响应式，可以提升性能：

```javascript
const foo = markRaw({ nested: {} })
```

### shallowRef()

创建一个浅层响应式引用，只有 `.value` 的访问是响应式的。

通过合理使用这些核心 API，您可以构建出高性能、可维护的应用程序。建议详细阅读每个 API 的文档，了解其适用场景和最佳实践。
