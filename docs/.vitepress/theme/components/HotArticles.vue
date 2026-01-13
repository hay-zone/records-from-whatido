<template>
  <div class="hot-articles-card">
    <h3 class="hot-articles-title">
      <span class="icon">🔥</span>
      精选文章
    </h3>

    <div class="hot-articles-list">
      <a
        v-for="(article, index) in articles"
        :key="index"
        :href="article.link"
        class="hot-article-item"
      >
        <div class="article-badge" :class="`badge-${index + 1}`">
          {{ index + 1 }}
        </div>
        <div class="article-content">
          <div class="article-title">{{ article.title }}</div>
          <div class="article-date">{{ article.date }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const articles = ref([
  {
    title: '毕业生必看的新资结构解析',
    date: '2024-10-28',
    link: '#'
  },
  {
    title: '于速备努力，千里自同风',
    date: '2024-09-03',
    link: '#'
  },
  {
    title: '保护好眼睛',
    date: '2023-12-13',
    link: '#'
  }
])
</script>

<style scoped>
.hot-articles-card {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

html.dark .hot-articles-card {
  background: rgba(42, 42, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.2);
}

.hot-articles-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

html.dark .hot-articles-title {
  color: #f9fafb;
}

.icon {
  font-size: 18px;
}

.hot-articles-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hot-article-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
}

.hot-article-item:hover {
  background: rgba(59, 130, 246, 0.05);
  transform: translateX(4px);
}

html.dark .hot-article-item:hover {
  background: rgba(59, 130, 246, 0.1);
}

.article-badge {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
}

.badge-1 {
  background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
}

.badge-2 {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
}

.badge-3 {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.article-content {
  flex: 1;
  min-width: 0;
}

.article-title {
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

html.dark .article-title {
  color: #f9fafb;
}

.article-date {
  font-size: 12px;
  color: #9ca3af;
}

html.dark .article-date {
  color: #6b7280;
}

@media (max-width: 960px) {
  .hot-articles-card {
    margin-top: 0;
  }
}
</style>
