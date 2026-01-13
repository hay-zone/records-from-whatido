// 主题配置
import BlogTheme from '@sugarat/theme'
import './style.css'

// 导入自定义组件
import AuthorCard from './components/AuthorCard.vue'
import HotArticles from './components/HotArticles.vue'
import { h } from 'vue'

export default {
  extends: BlogTheme,
  Layout() {
    return h(BlogTheme.Layout, null, {
      // 使用 @sugarat/theme 的插槽
      'blog-list-after': () => h('div', { class: 'custom-sidebar-wrapper' }, [
        h(AuthorCard),
        h(HotArticles)
      ])
    })
  },
  enhanceApp({ app }) {
    BlogTheme.enhanceApp?.({ app })

    // 注册全局组件
    app.component('AuthorCard', AuthorCard)
    app.component('HotArticles', HotArticles)
  }
}
