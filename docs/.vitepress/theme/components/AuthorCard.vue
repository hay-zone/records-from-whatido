<template>
  <div class="author-card-wrapper">
    <!-- 作者信息卡片 -->
    <div class="author-card">
      <img
        :src="avatar"
        :alt="name"
        class="author-avatar"
      />
      <h3 class="author-name">{{ name }}</h3>

      <!-- 统计信息 -->
      <div class="author-stats">
        <div class="stat-item">
          <div class="stat-number">{{ totalArticles }}</div>
          <div class="stat-label">博客文章</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">+{{ monthlyUpdates }}</div>
          <div class="stat-label">本月更新</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">+{{ weeklyUpdates }}</div>
          <div class="stat-label">本周更新</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('小刘')
const avatar = ref('/records-from-whatido/avatar.png')
const totalArticles = ref(270)
const monthlyUpdates = ref(1)
const weeklyUpdates = ref(0)
</script>

<style scoped>
.author-card-wrapper {
  position: sticky;
  top: 80px;
}

.author-card {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

html.dark .author-card {
  background: rgba(42, 42, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.2);
}

.author-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: block;
  border: 3px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
}

.author-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);
}

.author-name {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 24px 0;
}

html.dark .author-name {
  color: #f9fafb;
}

.author-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 4px;
}

html.dark .stat-number {
  color: #60a5fa;
}

.stat-label {
  font-size: 12px;
  color: #6b7280;
  white-space: nowrap;
}

html.dark .stat-label {
  color: #9ca3af;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: #e5e7eb;
}

html.dark .stat-divider {
  background: #404040;
}

@media (max-width: 960px) {
  .author-card-wrapper {
    position: static;
    margin-bottom: 24px;
  }
}
</style>
