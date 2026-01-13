# Web 性能优化

## 1. 性能指标

### Core Web Vitals
- LCP(Largest Contentful Paint): 最大内容绘制
- FID(First Input Delay): 首次输入延迟
- CLS(Cumulative Layout Shift): 累积布局偏移

### 其他指标
- FCP(First Contentful Paint): 首次内容绘制
- TTI(Time to Interactive): 可交互时间
- TBT(Total Blocking Time): 总阻塞时间

## 2. 加载优化

### 资源优化
- 压缩代码(minify)
- Gzip/Brotli 压缩
- 图片优化(WebP, 懒加载)
- 字体优化

### 缓存策略
- HTTP 缓存
- Service Worker
- CDN

### 代码分割
- 路由懒加载
- 组件懒加载
- 动态导入

## 3. 渲染优化

### 首屏优化
- SSR(服务端渲染)
- SSG(静态站点生成)
- 预渲染
- 骨架屏

### CSS 优化
- 关键 CSS 内联
- 避免 CSS 阻塞
- 减少重绘和回流

### JavaScript 优化
- 减少执行时间
- 避免长任务
- 使用 Web Worker

## 4. 网络优化

### HTTP/2
- 多路复用
- 服务器推送
- 头部压缩

### 预加载
- DNS 预解析
- 预连接
- 预加载
- 预获取

```html
<link rel="dns-prefetch" href="https://example.com">
<link rel="preconnect" href="https://example.com">
<link rel="preload" href="/style.css" as="style">
<link rel="prefetch" href="/next-page.js">
```

## 5. 性能监控

### 工具
- Lighthouse
- WebPageTest
- Chrome DevTools
- Performance API

### 真实用户监控(RUM)
- Google Analytics
- Sentry
- 自建监控系统
