# 配置 API

配置 API 允许您自定义应用程序的行为和外观。通过合理配置，可以让应用更好地适应您的业务需求。

## 全局配置

### app.config

全局配置对象，包含应用级别的配置选项：

```javascript
app.config.globalProperties.$http = axios
```

通过 `globalProperties` 可以添加全局属性，在所有组件中访问。

### errorHandler

全局错误处理器，捕获所有组件中未处理的错误：

```javascript
app.config.errorHandler = (err, instance, info) => {
  console.error('捕获错误:', err)
  // 上报错误到监控服务
}
```

**参数：**
- `err` - 错误对象
- `instance` - 发生错误的组件实例
- `info` - 错误信息字符串

### warnHandler

开发模式下的警告处理器，用于自定义警告信息的处理：

```javascript
app.config.warnHandler = (msg, instance, trace) => {
  console.warn('警告:', msg)
}
```

## 性能配置

### performance

启用性能追踪，在浏览器开发工具的性能面板中查看组件渲染性能：

```javascript
app.config.performance = true
```

仅在开发模式下有效，生产环境会自动忽略。

### compilerOptions

编译器配置选项，用于自定义模板编译行为：

```javascript
app.config.compilerOptions.isCustomElement = tag => {
  return tag.startsWith('custom-')
}
```

可以定义自定义元素、空白字符处理等编译规则。

## 开发工具配置

### devtools

控制是否在浏览器的 Vue DevTools 扩展中显示应用：

```javascript
app.config.devtools = true
```

生产环境建议设置为 `false`。

## 组件配置

### components

注册全局组件，使其在所有组件中可用：

```javascript
app.component('MyButton', ButtonComponent)
```

全局组件无需在每个使用的地方单独引入。

### directives

注册全局指令：

```javascript
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
```

## 插件配置

### use()

安装插件，扩展应用功能：

```javascript
app.use(VueRouter, {
  // 路由配置
})
```

插件可以添加全局功能、组件、指令等。

## 混入配置

### mixin()

注册全局混入，会影响应用中的每个组件：

```javascript
app.mixin({
  created() {
    console.log('组件创建')
  }
})
```

**注意：** 全局混入会影响所有组件，包括第三方组件，使用时需谨慎。

## 渲染配置

### mount()

将应用实例挂载到 DOM 元素上：

```javascript
app.mount('#app')
```

**参数：**
- `selector` (string | Element) - CSS 选择器或 DOM 元素

### unmount()

卸载应用实例，清理所有资源。

## 环境配置

### isProduction

检测当前是否为生产环境：

```javascript
if (app.config.isProduction) {
  // 生产环境逻辑
}
```

可以根据环境执行不同的逻辑，如日志记录、错误上报等。

## 路由配置

### router

配置应用的路由系统：

```javascript
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

app.use(router)
```

支持多种路由模式、嵌套路由、路由守卫等高级功能。

## 状态管理配置

### store

配置全局状态管理：

```javascript
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

app.use(store)
```

## 国际化配置

### i18n

配置多语言支持：

```javascript
const i18n = createI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': { welcome: '欢迎' },
    'en-US': { welcome: 'Welcome' }
  }
})

app.use(i18n)
```

通过合理配置这些 API，您可以打造一个功能强大、性能优异的应用程序。建议在项目初期就规划好配置方案，避免后期大规模重构。
