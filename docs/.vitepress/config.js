import { defineConfig } from 'vitepress';
import { getThemeConfig } from '@sugarat/theme/node';

const blogTheme = getThemeConfig({
  // 作者信息
  author: '小刘',

  // 博客配置
  blog: {
    // 首页标语
    motto: '为学应尽毕生力，攀高贵在少年时',
    // 首页头像
    avatar: '/avatar.png',
    // 背景图片（水彩画背景由 CSS 实现，这里可以留空或设置为透明）
    // bgImage: '/records-from-whatido/bg-image.jpeg',
    // 底部小标语
    slogan: '生活的真谛不在繁华，而在于淡泊',
    // 是否展示作者卡片
    showAuthor: false,  // 关闭默认的作者卡片，使用自定义的
    // 分页配置
    paginationSize: 6,
    // 文章封面图（启用文章封面）
    cover: true
  },

  // 公告配置
  popover: {
    title: '💡 欢迎来到码间拾光',
    body: [
      { type: 'text', content: '👋 在代码与文字之间，拾取那些闪光的瞬间' },
      { type: 'text', content: '📚 这里记录技术成长、文学摘录与人生感悟' },
      { type: 'text', content: '💻 涵盖前端、后端、架构等技术分享' },
      { type: 'text', content: '📝 收录诗词文章、好文好句' }
    ],
    duration: 0
  },

  // 推荐文章
  recommend: {
    showSelf: true,
    nextText: '下一页',
    style: 'sidebar'
  },

  // 热门文章配置
  hotArticle: {
    title: '🔥 精选文章',
    nextText: '换一组',
    pageSize: 5,
    empty: '暂无精选文章'
  },

  // 搜索配置
  search: 'pagefind',

  // 文章默认作者
  authorList: [
    {
      nickname: '小刘',
      url: 'https://github.com/hayzone',
      des: '在代码的世界里寻找诗意'
    }
  ]
});

export default defineConfig({
  extends: blogTheme,
  title: '小刘\'s Blog',
  description: '为学应尽毕生力，攀高贵在少年时',
  // base: '/records-from-whatido/', // Cloudflare Pages 使用根路径，注释掉
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💡</text></svg>' }],
    ['meta', { name: 'author', content: '小刘' }],
    ['meta', { property: 'og:author', content: '小刘' }]
  ],

  themeConfig: {
    nav: [
      { text: '力扣每日一题', link: '/category/leetcode' },
      { text: 'Java', link: '/category/java' },
      { text: 'SpringBoot', link: '/category/springboot' },
      { text: 'SSM', link: '/category/ssm' },
      { text: '笔记', link: '/category/notes' },
      { text: 'MySQL', link: '/category/mysql' },
      { text: 'JavaWeb', link: '/category/javaweb' },
      { text: 'Linux', link: '/category/linux' },
      { text: '生活随笔', link: '/category/life' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hayzone' }
    ]
  }
});
