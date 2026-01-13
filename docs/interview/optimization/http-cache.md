# 第三题：HTTP 缓存策略

## 一、问题背景

### Q1: 什么是 HTTP 缓存？为什么需要缓存？

**A:** HTTP 缓存是浏览器和服务器之间的一种协商机制，用于存储和重用已获取的资源，避免重复请求和传输。

**为什么需要缓存：**
- ⚡ **加载速度提升**：从本地读取比网络请求快 10-100 倍
- 📉 **降低带宽成本**：减少数据传输，节省流量费用
- 🚀 **减轻服务器压力**：减少请求数量，降低服务器负载
- 🌍 **改善用户体验**：页面响应更快，离线也可访问部分资源

---

## 二、缓存类型概览

### Q2: HTTP 缓存分为哪几种类型？

**A:** HTTP 缓存分为两大类：**强缓存**和**协商缓存**

| 类型 | 触发时机 | 是否请求服务器 | 响应码 | 速度 |
|------|---------|---------------|--------|------|
| **强缓存** | 缓存未过期 | ❌ 不请求 | 200 (from cache) | ⚡ 最快 |
| **协商缓存** | 缓存过期 | ✅ 请求验证 | 304 Not Modified | 🚀 较快 |
| **无缓存** | 每次都请求 | ✅ 完整请求 | 200 OK | 🐢 最慢 |

---

## 三、强缓存详解

### Q3: 什么是强缓存？如何配置？

**A:** 强缓存是指浏览器直接从本地缓存读取资源，**不向服务器发送请求**。

**核心特点：**
- Chrome DevTools 显示：`200 (from disk cache)` 或 `200 (from memory cache)`
- 加载时间几乎为 0ms
- 节省带宽和服务器资源

**控制字段：**

#### 1. Cache-Control（HTTP/1.1，推荐使用）

**常用指令：**

| 指令 | 作用 | 适用场景 | 示例 |
|------|------|---------|------|
| `max-age=<秒>` | 缓存有效期 | 所有可缓存资源 | `max-age=31536000`（1年） |
| `public` | 可被任何缓存存储 | 公共资源（CSS、JS、图片） | `public` |
| `private` | 只能被浏览器缓存 | 用户个人数据 | `private` |
| `no-cache` | 每次使用前必须验证 | 需要实时性的资源 | `no-cache` |
| `no-store` | 完全禁止缓存 | 敏感信息 | `no-store` |
| `immutable` | 资源永不改变 | 带 hash 的静态资源 | `immutable` |

**代码示例：**

```http
# 1. 静态资源（1年强缓存）
Cache-Control: max-age=31536000, public, immutable

# 2. 用户个人数据（1天，仅浏览器缓存）
Cache-Control: max-age=86400, private

# 3. 需要验证的资源（协商缓存）
Cache-Control: no-cache

# 4. 敏感信息（完全不缓存）
Cache-Control: no-store, no-cache, must-revalidate, private
```

#### 2. Expires（HTTP/1.0，已过时）

**语法：**
```http
Expires: Wed, 21 Oct 2026 07:28:00 GMT
```

**缺点：**
- 使用绝对时间，依赖客户端时间
- 如果客户端时间不准确，会导致缓存失效

**优先级：**
```
Cache-Control > Expires
```

---

## 四、协商缓存详解

### Q4: 什么是协商缓存？如何工作？

**A:** 协商缓存是指浏览器向服务器发送请求验证资源是否修改，如果未修改则返回 `304 Not Modified`，浏览器使用本地缓存。

**核心特点：**
- 需要发送请求，但**不返回资源内容**
- 响应码：`304 Not Modified`
- 节省带宽（只传输响应头，不传输资源）

**控制字段：**

#### 1. ETag / If-None-Match（推荐）

**原理：**
- 服务器为资源生成唯一标识（hash 或版本号）
- 客户端下次请求时携带该标识
- 服务器比对判断是否修改

**流程示例：**

```http
# 第一次请求
→ GET /app.js HTTP/1.1

← HTTP/1.1 200 OK
  ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
  Cache-Control: no-cache

  // app.js 的完整内容

---

# 第二次请求（携带 ETag）
→ GET /app.js HTTP/1.1
  If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"

← HTTP/1.1 304 Not Modified
  ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"

  (无 body，浏览器使用缓存)
```

**优点：**
- ✅ 精确判断资源是否变化
- ✅ 解决 Last-Modified 的秒级精度问题
- ✅ 解决内容相同但时间变化的问题

**缺点：**
- ⚠️ 计算 ETag 有性能开销

---

#### 2. Last-Modified / If-Modified-Since

**原理：**
- 服务器返回资源的最后修改时间
- 客户端下次请求时携带该时间
- 服务器比对判断是否修改

**流程示例：**

```http
# 第一次请求
→ GET /logo.png HTTP/1.1

← HTTP/1.1 200 OK
  Last-Modified: Tue, 12 Jan 2026 08:00:00 GMT
  Cache-Control: no-cache

  [图片二进制数据]

---

# 第二次请求（携带修改时间）
→ GET /logo.png HTTP/1.1
  If-Modified-Since: Tue, 12 Jan 2026 08:00:00 GMT

← HTTP/1.1 304 Not Modified
  Last-Modified: Tue, 12 Jan 2026 08:00:00 GMT

  (无 body，浏览器使用缓存)
```

**局限性：**
- ❌ 精度只到秒级，1秒内多次修改无法识别
- ❌ 文件内容没变但修改时间变了（如重新打包）
- ❌ 服务器时钟不同步问题

**优先级：**
```
ETag > Last-Modified
```

---

## 五、完整缓存流程

### Q5: 浏览器请求资源时的完整缓存流程是怎样的？

**A:** 完整的缓存决策流程如下：

```
浏览器请求资源
    ↓
1. 检查本地缓存
    ↓
    有缓存？
    ├─ 否 → 向服务器请求 → 200 OK → 存入缓存
    ↓
    是
    ↓
2. 检查 Cache-Control
    ↓
    ├─ no-store? → 是 → 完全不缓存，请求服务器
    ↓
    否
    ↓
3. 检查缓存是否过期（max-age）
    ↓
    ├─ 未过期? → 是 → 使用强缓存 → 200 (from cache) ⚡
    ↓
    否（已过期）或 no-cache
    ↓
4. 进入协商缓存
    ↓
    发送验证请求（携带 If-None-Match / If-Modified-Since）
    ↓
    服务器比对
    ↓
    ├─ 资源未修改? → 是 → 304 Not Modified → 使用缓存 🚀
    ↓
    否
    ↓
    200 OK + 新资源 → 更新缓存
```

---

## 六、前端 vs 后端控制

### Q6: HTTP 缓存是由前端还是后端控制的？

**A:** HTTP 缓存**主要由后端控制**，但前端也有一定的参与。

#### 后端控制（主要）

**1. 设置响应头（服务器配置）**

```nginx
# Nginx 配置示例
server {
  # 带 hash 的静态资源（1年强缓存）
  location ~* \.[a-f0-9]{8,}\.(js|css|png|jpg)$ {
    add_header Cache-Control "max-age=31536000, public, immutable";
  }

  # HTML 文件（不缓存）
  location ~* \.html$ {
    add_header Cache-Control "no-cache, no-store, must-revalidate";
  }

  # 启用 ETag
  etag on;
}
```

```javascript
// Node.js (Express) 示例
app.use('/assets', (req, res, next) => {
  // 检查文件名是否包含 hash
  const hasHash = /\.[a-f0-9]{8,}\.(js|css|png)$/.test(req.url);

  if (hasHash) {
    // 强缓存 1年
    res.setHeader('Cache-Control', 'max-age=31536000, public, immutable');
  } else {
    // 协商缓存
    res.setHeader('Cache-Control', 'no-cache');
  }

  next();
});
```

**2. 生成 ETag**

```javascript
const crypto = require('crypto');

app.get('/data.json', (req, res) => {
  const data = { users: [...] };
  const content = JSON.stringify(data);

  // 生成 ETag
  const etag = crypto.createHash('md5').update(content).digest('hex');

  // 检查客户端 ETag
  if (req.headers['if-none-match'] === etag) {
    return res.status(304).end();  // 304 Not Modified
  }

  res.setHeader('ETag', etag);
  res.setHeader('Cache-Control', 'no-cache');
  res.json(data);
});
```

---

#### 前端参与（辅助）

**1. 构建时生成文件 hash（Webpack/Vite）**

```javascript
// webpack.config.js
module.exports = {
  output: {
    // JS 文件使用 contenthash
    filename: '[name].[contenthash:8].js',

    // 资源文件使用 hash
    assetModuleFilename: 'assets/[name].[hash:8][ext]',
  }
};

// 生成的文件：
// app.abc12345.js  ← 内容变化，hash 就变，自动绕过缓存
// logo.def67890.png
```

**2. 请求时控制缓存行为**

```javascript
// 强制刷新（绕过缓存）
fetch('/api/data', {
  cache: 'no-cache'  // 相当于 Ctrl+F5
});

// 只使用缓存（离线优先）
fetch('/api/data', {
  cache: 'force-cache'
});

// 正常缓存策略
fetch('/api/data', {
  cache: 'default'
});
```

**3. Service Worker 缓存（PWA）**

```javascript
// service-worker.js（前端完全控制）
self.addEventListener('fetch', event => {
  // 缓存优先策略
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
```

---

#### 总结

| 职责 | 前端 | 后端 |
|------|------|------|
| **设置缓存策略** | ❌ 无法控制 | ✅ 完全控制 |
| **生成文件 hash** | ✅ 构建工具 | ❌ 通常不做 |
| **设置 ETag** | ❌ 无法控制 | ✅ 服务器生成 |
| **Service Worker** | ✅ 完全控制 | ❌ 无法控制 |
| **请求时控制** | ✅ fetch API | ❌ 无法控制 |

**最佳实践：**
- 后端：设置合理的 `Cache-Control` 和 `ETag`
- 前端：构建时生成文件 hash，配合后端缓存策略

---

## 七、最佳实践配置

### Q7: 不同类型资源应该如何配置缓存？

**A:** 根据资源类型和更新频率，采用不同的缓存策略：

#### 资源分类缓存策略

| 资源类型 | 缓存策略 | Cache-Control | 原因 |
|---------|---------|---------------|------|
| **HTML 入口文件** | 不缓存 | `no-cache, no-store, must-revalidate` | 入口文件需要实时更新 |
| **带 hash 的 JS/CSS** | 强缓存 1年 | `max-age=31536000, public, immutable` | 内容变了文件名就变 |
| **无 hash 的 JS/CSS** | 协商缓存 | `no-cache` + ETag | 需要验证是否更新 |
| **图片（带 hash）** | 强缓存 1年 | `max-age=31536000, public` | 同 JS/CSS |
| **图片（无 hash）** | 强缓存 30天 | `max-age=2592000, public` | 不经常变化 |
| **字体文件** | 强缓存 1年 | `max-age=31536000, public` | 基本不变 |
| **API 接口** | 不缓存 | `no-store, no-cache, private` | 动态数据 |
| **用户头像** | 短时缓存 | `private, max-age=3600` | 私密数据 |

#### 配置示例（Nginx）

```nginx
server {
  listen 80;
  root /var/www/html;

  # 1. HTML 文件（不缓存）
  location ~* \.html$ {
    add_header Cache-Control "no-cache, no-store, must-revalidate";
    add_header Pragma "no-cache";
    add_header Expires "0";
  }

  # 2. 带 hash 的静态资源（1年强缓存）
  location ~* \.[a-f0-9]{8,}\.(js|css|png|jpg|jpeg|gif|svg)$ {
    add_header Cache-Control "max-age=31536000, public, immutable";
  }

  # 3. 无 hash 的静态资源（协商缓存）
  location ~* \.(js|css|png|jpg|jpeg|gif|svg)$ {
    add_header Cache-Control "no-cache";
    etag on;
  }

  # 4. 字体文件（1年 + CORS）
  location ~* \.(woff|woff2|ttf|eot)$ {
    add_header Cache-Control "max-age=31536000, public";
    add_header Access-Control-Allow-Origin "*";
  }

  # 5. API 接口（不缓存）
  location /api/ {
    add_header Cache-Control "no-store, no-cache, must-revalidate, private";
    proxy_pass http://backend:3000;
  }
}
```

---

## 八、常见问题与解决方案

### Q8: 更新了代码，用户还是看到旧版本怎么办？

**问题原因：**
- HTML 被强缓存了
- 静态资源没有使用 hash 命名

**解决方案：**

**方案 1：HTML 永远不缓存**
```nginx
location = /index.html {
  add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

**方案 2：静态资源使用文件名 hash**
```javascript
// webpack.config.js
output: {
  filename: '[name].[contenthash:8].js'
}

// 生成：app.abc12345.js
// 内容变化 → hash 变化 → 自动绕过缓存
```

**方案 3：版本号查询参数**
```html
<!-- 部署时自动生成版本号 -->
<script src="/app.js?v=20260109"></script>
```

---

### Q9: 文件内容没变，但缓存失效了怎么办？

**问题原因：**
- 使用了 `Last-Modified`
- 重新部署导致文件修改时间变化

**解决方案：**

**使用 ETag 代替 Last-Modified**
```javascript
// Express
app.use(express.static('public', {
  etag: true,           // 启用 ETag（基于内容）
  lastModified: false   // 禁用 Last-Modified
}));
```

```nginx
# Nginx
etag on;
```

---

### Q10: CDN 缓存了旧版本，无法更新怎么办？

**解决方案：**

**方案 1：文件名 hash 化（推荐）**
```javascript
// 每次内容变化，文件名就变，自动绕过 CDN 缓存
output: {
  filename: '[name].[contenthash].js'
}
```

**方案 2：手动刷新 CDN 缓存**
```bash
# 阿里云 CDN
aliyun cdn RefreshObjectCaches --ObjectPath https://cdn.example.com/app.js

# 腾讯云 CDN
tccli cdn PurgeUrlsCache --Urls '["https://cdn.example.com/app.js"]'
```

**方案 3：设置合理的 CDN 缓存时长**
```nginx
# 源站设置短缓存，CDN 设置长缓存
add_header Cache-Control "max-age=300, s-maxage=31536000";
# max-age: 浏览器缓存 5分钟
# s-maxage: CDN 缓存 1年
```

---

### Q11: 移动端缓存不生效怎么办？

**问题原因：**
- 部分移动浏览器不支持某些缓存指令
- HTTPS 下默认不缓存

**解决方案：**

**同时设置多种缓存头，提高兼容性**
```http
Cache-Control: max-age=31536000, public
Expires: Wed, 09 Jan 2027 00:00:00 GMT
ETag: "abc123"
Last-Modified: Thu, 09 Jan 2026 00:00:00 GMT
```

**HTTPS 下明确设置 public**
```http
Cache-Control: max-age=31536000, public
```

---

## 九、注意事项

### Q12: 配置 HTTP 缓存时需要注意什么？

**A:** 配置缓存时需要注意以下关键点：

#### 1. 安全相关

**⚠️ 不要缓存敏感信息**
```http
# 错误示例 ❌
Cache-Control: max-age=3600, public  # 用户隐私可能被 CDN 缓存

# 正确示例 ✅
Cache-Control: no-store, no-cache, must-revalidate, private
```

**⚠️ 用户数据必须使用 private**
```javascript
// 用户个人数据
app.get('/user/profile', (req, res) => {
  res.setHeader('Cache-Control', 'private, max-age=60');
  res.json(userProfile);
});
```

---

#### 2. 更新策略

**⚠️ HTML 入口文件不能强缓存**
```nginx
# 错误示例 ❌
location ~* \.html$ {
  add_header Cache-Control "max-age=86400";  # 会导致更新延迟
}

# 正确示例 ✅
location ~* \.html$ {
  add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

**⚠️ 静态资源必须有版本控制**

方式 1：文件名 hash（推荐）
```javascript
// app.abc123.js
// app.def456.js  ← 内容变化，文件名变化
```

方式 2：查询参数版本号
```html
<script src="/app.js?v=1.0.1"></script>
```

---

#### 3. CDN 配置

**⚠️ 区分浏览器缓存和 CDN 缓存**
```http
# s-maxage 专门控制 CDN 缓存时长
Cache-Control: max-age=300, s-maxage=31536000

# max-age: 浏览器缓存 5分钟
# s-maxage: CDN 缓存 1年（优先级高于 max-age）
```

**⚠️ CDN 回源请求也要考虑缓存**
```nginx
# 源站配置
location /api/ {
  add_header Cache-Control "no-cache";  # CDN 每次都回源验证
}
```

---

#### 4. 协商缓存

**⚠️ ETag 和 Last-Modified 可以同时使用**
```javascript
app.get('/resource', (req, res) => {
  const etag = generateETag(content);
  const lastModified = new Date(file.mtime).toUTCString();

  // 同时设置，提高兼容性
  res.setHeader('ETag', etag);
  res.setHeader('Last-Modified', lastModified);

  // 服务器优先检查 ETag
  if (req.headers['if-none-match'] === etag) {
    return res.status(304).end();
  }

  res.send(content);
});
```

**⚠️ 304 响应也要返回缓存头**
```javascript
if (req.headers['if-none-match'] === etag) {
  // 正确示例 ✅
  res.setHeader('ETag', etag);
  res.setHeader('Cache-Control', 'no-cache');
  return res.status(304).end();
}
```

---

#### 5. 性能优化

**⚠️ 合理设置缓存时长**
```
过短 → 频繁请求，性能差
过长 → 更新困难，用户看到旧版本

推荐：
- 带 hash 资源：1年（max-age=31536000）
- 图片/字体：30天（max-age=2592000）
- HTML：不缓存（no-cache）
- API：不缓存（no-store）
```

**⚠️ immutable 指令提升性能**
```http
# 带 hash 的资源使用 immutable
Cache-Control: max-age=31536000, public, immutable

# 作用：告诉浏览器这个文件永远不会变
# 浏览器在缓存有效期内，刷新时也不会发送验证请求
```

---

#### 6. 调试问题

**⚠️ 开发时禁用缓存**
```javascript
// 开发环境
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
  });
}
```

**⚠️ Chrome DevTools 检查缓存**
```
1. F12 打开开发者工具
2. Network 标签页
3. 勾选 "Disable cache" 测试无缓存情况
4. 查看 Size 列：
   - (disk cache) → 强缓存
   - (memory cache) → 强缓存
   - 304 → 协商缓存生效
   - 200 + 实际大小 → 完整请求
```

---

## 十、快速参考

### 常用 Cache-Control 组合

```http
# 1. 永久静态资源（带 hash）
Cache-Control: max-age=31536000, public, immutable

# 2. 普通静态资源（无 hash）
Cache-Control: max-age=2592000, public

# 3. 需要验证的资源
Cache-Control: no-cache

# 4. 用户私密数据
Cache-Control: private, max-age=60

# 5. 完全不缓存
Cache-Control: no-store, no-cache, must-revalidate

# 6. HTML 入口文件
Cache-Control: no-cache, no-store, must-revalidate
```

### 响应头优先级

```
1. Cache-Control: no-store
   ↓ 完全不缓存，后续头无效

2. Cache-Control: no-cache
   ↓ 必须验证（进入协商缓存）

3. Cache-Control: max-age=<seconds>
   ↓ 强缓存（优先于 Expires）

4. ETag / If-None-Match
   ↓ 协商缓存（优先于 Last-Modified）

5. Last-Modified / If-Modified-Since
   ↓ 协商缓存
```

---

## 十一、总结

### 核心原则

1. **HTML 不缓存** - 入口文件需要实时更新
2. **带 hash 的资源永久缓存** - 内容变化自动更新文件名
3. **无 hash 的资源协商缓存** - 使用 ETag 验证
4. **API 数据不缓存** - 动态数据需要实时性
5. **私密数据 private** - 防止 CDN 缓存用户隐私

### 最佳实践流程

```
1. 构建阶段（Webpack/Vite）
   ├─ JS/CSS/图片添加 contenthash
   └─ HTML 不添加 hash

2. 服务器配置（Nginx/Node）
   ├─ 带 hash 资源: max-age=1y, immutable
   ├─ 无 hash 资源: no-cache + ETag
   └─ HTML: no-cache, no-store

3. 监控与优化
   ├─ 监控缓存命中率
   ├─ 检查资源加载时间
   └─ 定期审查缓存策略
```

### 性能提升效果

合理配置 HTTP 缓存可以实现：
- ⚡ **加载速度提升 80%+**
- 📉 **带宽成本降低 90%+**
- 🚀 **服务器压力减少 95%+**
- 🌍 **用户体验显著改善**

---

## 十二、扩展阅读

- [MDN: HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
- [Google: HTTP 缓存最佳实践](https://web.dev/http-cache/)
- [RFC 7234: HTTP/1.1 Caching](https://tools.ietf.org/html/rfc7234)
