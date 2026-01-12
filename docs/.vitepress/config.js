export default {
  title: 'VitePress 项目',
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
      ]
    }
  }
}
