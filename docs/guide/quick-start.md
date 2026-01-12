# 快速开始

欢迎使用我们的项目！本指南将帮助您快速上手，了解项目的基本使用方法。

## 安装

首先，您需要确保系统中已安装 Node.js 环境（建议版本 16.0 或更高）。然后通过 npm 或 yarn 安装项目依赖：

```bash
npm install vitepress -D
```

或者使用 yarn：

```bash
yarn add -D vitepress
```

## 初始化项目

安装完成后，您可以通过以下命令初始化一个新的 VitePress 项目：

```bash
npx vitepress init
```

按照提示完成项目配置，系统会自动为您创建必要的目录结构和配置文件。

## 目录结构

一个标准的 VitePress 项目通常包含以下目录结构：

- `docs/` - 文档源文件目录
- `.vitepress/` - 配置文件目录
- `config.js` - 主配置文件
- `public/` - 静态资源目录

## 启动开发服务器

配置完成后，运行以下命令启动本地开发服务器：

```bash
npm run docs:dev
```

服务器默认运行在 `http://localhost:5173`，您可以在浏览器中访问此地址查看效果。

## 编写第一个页面

在 `docs` 目录下创建一个新的 Markdown 文件，开始编写您的第一个文档页面。VitePress 支持标准的 Markdown 语法，同时还提供了许多增强功能。

## 配置导航

在 `.vitepress/config.js` 文件中，您可以配置网站的导航栏、侧边栏等信息。这样可以让您的文档站点结构更加清晰，方便用户浏览。

## 构建部署

开发完成后，使用以下命令构建生产版本：

```bash
npm run docs:build
```

构建产物将输出到 `.vitepress/dist` 目录，您可以将其部署到任何静态网站托管服务上，如 GitHub Pages、Netlify、Vercel 等平台都支持一键部署。

通过以上步骤，您已经成功创建并运行了第一个 VitePress 项目！接下来可以继续学习基础教程，深入了解更多功能。
