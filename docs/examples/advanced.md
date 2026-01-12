# 进阶示例

本章节提供了更复杂的示例，展示框架的高级特性和实际应用场景。这些示例帮助您构建更强大的应用程序。

## 组件通信

展示父子组件之间的数据传递和事件通信：

```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent
      :message="parentMessage"
      @update="handleUpdate"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const parentMessage = ref('来自父组件的消息')

const handleUpdate = (newValue) => {
  console.log('子组件发送的数据:', newValue)
}
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="sendToParent">发送到父组件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['message'])
const emit = defineEmits(['update'])

const sendToParent = () => {
  emit('update', '子组件的数据')
}
</script>
```

## 动态组件

使用 `component` 标签动态切换组件：

```vue
<template>
  <div>
    <button @click="currentTab = 'Home'">首页</button>
    <button @click="currentTab = 'Profile'">个人中心</button>
    <button @click="currentTab = 'Settings'">设置</button>

    <component :is="tabs[currentTab]" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './Home.vue'
import Profile from './Profile.vue'
import Settings from './Settings.vue'

const currentTab = ref('Home')
const tabs = { Home, Profile, Settings }
</script>
```

这种模式适合实现标签页、向导等场景。

## 插槽使用

展示如何使用插槽实现内容分发：

```vue
<!-- Card.vue -->
<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">默认标题</slot>
    </div>
    <div class="card-body">
      <slot>默认内容</slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
```

使用卡片组件：

```vue
<Card>
  <template #header>
    <h3>自定义标题</h3>
  </template>

  <p>这是卡片的主体内容</p>

  <template #footer>
    <button>操作按钮</button>
  </template>
</Card>
```

## 组合式函数

创建可复用的组合式函数：

```javascript
// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
```

在组件中使用：

```vue
<script setup>
import { useMouse } from './useMouse'

const { x, y } = useMouse()
</script>

<template>
  <p>鼠标位置: {{ x }}, {{ y }}</p>
</template>
```

## 异步组件

展示如何懒加载组件，优化初始加载性能：

```vue
<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)
</script>

<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </Suspense>
</template>
```

## 状态管理

使用 Pinia 进行全局状态管理：

```javascript
// store/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

在组件中使用：

```vue
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div>
    <p>{{ counter.count }}</p>
    <button @click="counter.increment">增加</button>
  </div>
</template>
```

## 路由守卫

实现路由级别的权限控制：

```javascript
import { createRouter } from 'vue-router'

const router = createRouter({
  routes: [...]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
```

这些进阶示例展示了构建实际应用所需的关键技术。通过学习和实践这些示例，您将能够开发出功能完善、架构合理的应用程序。
