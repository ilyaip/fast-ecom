<script setup lang="ts">
import { AnimatedSection, AppIcon } from '@/shared/ui'
import type { IconName } from '@/shared/ui/AppIcon.vue'

interface TechItem {
  id: string
  name: string
  icon: IconName
  description: string
  color: string
}

interface FeatureItem {
  id: string
  title: string
  description: string
  icon: IconName
  color: string
}

const technologies: TechItem[] = [
  { id: 'vue', name: 'Vue.js', icon: 'vue', description: 'Современный фреймворк для UI', color: '#42b883' },
  { id: 'node', name: 'Node.js', icon: 'node', description: 'Быстрый серверный JavaScript', color: '#68a063' },
  { id: 'postgres', name: 'PostgreSQL', icon: 'database', description: 'Надёжная база данных', color: '#336791' },
  { id: 'docker', name: 'Docker', icon: 'docker', description: 'Контейнеризация и деплой', color: '#2496ed' },
  { id: 'ai', name: 'AI/ML', icon: 'brain', description: 'Интеллектуальные решения', color: '#8b5cf6' }
]

const features: FeatureItem[] = [
  {
    id: 'speed',
    title: 'Быстрая разработка',
    description: 'Используем современные инструменты и готовые решения для ускорения разработки без потери качества.',
    icon: 'speed',
    color: '#f59e0b'
  },
  {
    id: 'flexibility',
    title: 'Гибкая архитектура',
    description: 'Модульная структура позволяет легко масштабировать и адаптировать решения под ваши задачи.',
    icon: 'settings',
    color: '#3b82f6'
  },
  {
    id: 'ai-integration',
    title: 'AI-интеграции',
    description: 'Внедряем AI-агентов и машинное обучение для автоматизации и улучшения бизнес-процессов.',
    icon: 'brain',
    color: '#8b5cf6'
  }
]
</script>

<template>
  <section id="approach" class="approach">
    <div class="approach__container">
      <AnimatedSection animation="fade-up" class="approach__header">
        <h2 class="approach__title">Наш подход</h2>
        <p class="approach__subtitle">
          Современный технологический стек для создания быстрых и надёжных решений
        </p>
      </AnimatedSection>

      <div class="approach__content">
        <AnimatedSection animation="slide-right" class="approach__tech">
          <h3 class="approach__section-title">Технологии</h3>
          <div class="approach__tech-grid">
            <div
              v-for="(tech, index) in technologies"
              :key="tech.id"
              class="approach__tech-item"
              :style="{ '--item-delay': `${index * 100}ms` }"
            >
            <div class="approach__tech-icon" :style="{ color: tech.color }">
              <AppIcon :name="tech.icon" size="md" animated />
            </div>
              <div class="approach__tech-info">
                <span class="approach__tech-name">{{ tech.name }}</span>
                <span class="approach__tech-desc">{{ tech.description }}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-left" class="approach__features">
          <h3 class="approach__section-title">Преимущества</h3>
          <div class="approach__features-list">
            <div
              v-for="(feature, index) in features"
              :key="feature.id"
              class="approach__feature"
              :style="{ '--item-delay': `${index * 150}ms` }"
            >
              <div class="approach__feature-icon" :style="{ color: feature.color }">
                <AppIcon :name="feature.icon" size="lg" animated />
              </div>
              <div class="approach__feature-content">
                <h4 class="approach__feature-title">{{ feature.title }}</h4>
                <p class="approach__feature-desc">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>


<style scoped>
.approach {
  padding: var(--spacing-4xl) var(--spacing-lg);
  background: var(--color-bg-white);
}

.approach__container {
  max-width: 1280px;
  margin: 0 auto;
}

.approach__header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.approach__title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.approach__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.approach__content {
  display: grid;
  gap: var(--spacing-3xl);
}

.approach__section-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xl);
}

/* Technologies */
.approach__tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.approach__tech-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-bg-light);
  border-radius: var(--radius-xl);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: var(--item-delay, 0ms);
  opacity: 0;
}

.approach__tech-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.approach__tech-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.approach__tech-item:hover .approach__tech-icon {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.approach__tech-info {
  display: flex;
  flex-direction: column;
}

.approach__tech-name {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.approach__tech-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

/* Features */
.approach__features-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.approach__feature {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: var(--color-bg-light);
  border-radius: var(--radius-xl);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: var(--item-delay, 0ms);
  opacity: 0;
}

.approach__feature:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.approach__feature-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.approach__feature:hover .approach__feature-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.approach__feature-content {
  flex: 1;
}

.approach__feature-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.approach__feature-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .approach {
    padding: var(--spacing-4xl) var(--spacing-2xl);
  }

  .approach__content {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-4xl);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .approach__tech-item,
  .approach__feature {
    animation: none;
    opacity: 1;
  }
}

/* Small mobile (320px - 479px) */
@media (max-width: 479px) {
  .approach {
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  .approach__title {
    font-size: var(--font-size-2xl);
  }

  .approach__subtitle {
    font-size: var(--font-size-base);
  }

  .approach__header {
    margin-bottom: var(--spacing-xl);
  }

  .approach__section-title {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-md);
  }

  .approach__tech-grid {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .approach__tech-item {
    padding: var(--spacing-sm) var(--spacing-md);
    width: 100%;
  }

  .approach__tech-icon {
    font-size: 1.5rem;
  }

  .approach__tech-name {
    font-size: var(--font-size-sm);
  }

  .approach__tech-desc {
    font-size: var(--font-size-xs);
  }

  .approach__feature {
    padding: var(--spacing-md);
    gap: var(--spacing-md);
  }

  .approach__feature-icon {
    font-size: 2rem;
  }

  .approach__feature-title {
    font-size: var(--font-size-lg);
  }

  .approach__feature-desc {
    font-size: var(--font-size-sm);
  }

  .approach__features-list {
    gap: var(--spacing-md);
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .approach__tech-grid {
    justify-content: center;
  }
}
</style>
