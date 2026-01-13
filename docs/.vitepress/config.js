export default {
  title: '码间拾光',
  description: '一个功能完善的 VitePress 文档站点',
  themeConfig: {
    nav: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '基础教程', link: '/guide/basic-tutorial' },
          { text: '进阶指南', link: '/guide/advanced-guide' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: '按钮组件', link: '/components/button' },
          { text: '表单组件', link: '/components/form' },
          { text: '布局组件', link: '/components/layout' }
        ]
      },
      {
        text: 'API 参考',
        items: [
          { text: '核心 API', link: '/api/core-api' },
          { text: '工具 API', link: '/api/utils-api' },
          { text: '配置 API', link: '/api/config-api' }
        ]
      },
      {
        text: '示例',
        items: [
          { text: '基础示例', link: '/examples/basic' },
          { text: '进阶示例', link: '/examples/advanced' },
          { text: '最佳实践', link: '/examples/best-practices' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '项目介绍', link: '/about/introduction' },
          { text: '团队成员', link: '/about/team' },
          { text: '更新日志', link: '/about/changelog' }
        ]
      },
      {
        text: '面试',
        items: [
          { text: 'Vue', link: '/interview/vue/basics' },
          { text: 'React', link: '/interview/react/basics' },
          { text: 'Node.js', link: '/interview/nodejs/basics' },
          { text: 'TypeScript', link: '/interview/typescript/basics' },
          { text: 'JavaScript', link: '/interview/javascript/basics' },
          { text: 'CSS', link: '/interview/css/layout' },
          { text: '小程序', link: '/interview/miniprogram/basics' },
          { text: 'AI', link: '/interview/ai/machine-learning' },
          { text: '架构', link: '/interview/architecture/design-patterns' },
          { text: '工具', link: '/interview/tools/git' },
          { text: '优化', link: '/interview/optimization/web-performance' }
        ]
      },
      {
        text: '好文收集',
        items: [
          { text: '诗词', link: '/articles/poetry/jiangnan' },
          { text: '短句', link: '/articles/quotes/' },
          { text: '其他', link: '/articles/other/mountain' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '基础教程', link: '/guide/basic-tutorial' },
            { text: '进阶指南', link: '/guide/advanced-guide' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '按钮组件', link: '/components/button' },
            { text: '表单组件', link: '/components/form' },
            { text: '布局组件', link: '/components/layout' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '核心 API', link: '/api/core-api' },
            { text: '工具 API', link: '/api/utils-api' },
            { text: '配置 API', link: '/api/config-api' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '示例',
          items: [
            { text: '基础示例', link: '/examples/basic' },
            { text: '进阶示例', link: '/examples/advanced' },
            { text: '最佳实践', link: '/examples/best-practices' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '项目介绍', link: '/about/introduction' },
            { text: '团队成员', link: '/about/team' },
            { text: '更新日志', link: '/about/changelog' }
          ]
        }
      ],
      '/interview/vue/': [
        {
          text: 'Vue 面试',
          items: [
            { text: 'Vue 基础', link: '/interview/vue/basics' },
            { text: 'Composition API', link: '/interview/vue/composition-api' },
            { text: '状态管理', link: '/interview/vue/state-management' }
          ]
        }
      ],
      '/interview/react/': [
        {
          text: 'React 面试',
          items: [
            { text: 'React 基础', link: '/interview/react/basics' },
            { text: 'React Hooks', link: '/interview/react/hooks' },
            { text: '性能优化', link: '/interview/react/performance' }
          ]
        }
      ],
      '/interview/nodejs/': [
        {
          text: 'Node.js 面试',
          items: [
            { text: 'Node.js 基础', link: '/interview/nodejs/basics' },
            { text: '异步编程', link: '/interview/nodejs/async' },
            { text: 'Express vs Koa', link: '/interview/nodejs/express-koa' }
          ]
        }
      ],
      '/interview/typescript/': [
        {
          text: 'TypeScript 面试',
          items: [
            { text: 'TypeScript 基础', link: '/interview/typescript/basics' },
            { text: 'TypeScript 进阶', link: '/interview/typescript/advanced' },
            { text: '最佳实践', link: '/interview/typescript/practices' }
          ]
        }
      ],
      '/interview/javascript/': [
        {
          text: 'JavaScript 面试',
          items: [
            { text: 'JavaScript 基础', link: '/interview/javascript/basics' },
            { text: 'ES6+ 特性', link: '/interview/javascript/es6' },
            { text: '异步编程', link: '/interview/javascript/async' }
          ]
        }
      ],
      '/interview/css/': [
        {
          text: 'CSS 面试',
          items: [
            { text: 'CSS 布局', link: '/interview/css/layout' },
            { text: '移动端 1px 问题', link: '/interview/css/1px-problem' },
            { text: 'Margin 塌陷问题', link: '/interview/css/margin-collapse' }
          ]
        }
      ],
      '/interview/miniprogram/': [
        {
          text: '小程序面试',
          items: [
            { text: '小程序基础', link: '/interview/miniprogram/basics' },
            { text: '组件开发', link: '/interview/miniprogram/components' },
            { text: 'API 使用', link: '/interview/miniprogram/api' }
          ]
        }
      ],
      '/interview/ai/': [
        {
          text: 'AI 面试',
          items: [
            { text: '机器学习基础', link: '/interview/ai/machine-learning' },
            { text: '大语言模型', link: '/interview/ai/llm' },
            { text: '计算机视觉', link: '/interview/ai/computer-vision' }
          ]
        }
      ],
      '/interview/architecture/': [
        {
          text: '架构面试',
          items: [
            { text: '设计模式', link: '/interview/architecture/design-patterns' },
            { text: '微服务架构', link: '/interview/architecture/microservices' },
            { text: '系统设计', link: '/interview/architecture/system-design' }
          ]
        }
      ],
      '/interview/tools/': [
        {
          text: '工具面试',
          items: [
            { text: 'Git 版本控制', link: '/interview/tools/git' },
            { text: 'Webpack', link: '/interview/tools/webpack' },
            { text: 'Vite', link: '/interview/tools/vite' }
          ]
        }
      ],
      '/interview/optimization/': [
        {
          text: '优化面试',
          items: [
            { text: 'Web 性能优化', link: '/interview/optimization/web-performance' },
            { text: 'HTTP 缓存策略', link: '/interview/optimization/http-cache' }
          ]
        }
      ],
      '/articles/poetry/': [
        {
          text: '诗词',
          items: [
            { text: '我打江南走过', link: '/articles/poetry/jiangnan' },
            { text: '醉里挑灯看剑', link: '/articles/poetry/pozhenzi' }
          ]
        }
      ],
      '/articles/quotes/': [
        {
          text: '短句',
          items: [
            { text: '暂无内容', link: '/articles/quotes/' }
          ]
        }
      ],
      '/articles/other/': [
        {
          text: '其他',
          items: [
            { text: '山的那边', link: '/articles/other/mountain' },
            { text: '滴露的康乃馨', link: '/articles/other/carnation' }
          ]
        }
      ]
    }
  }
}
