<script setup lang="ts">
import { ref, computed } from 'vue'
import { AnimatedSection, AppIcon } from '@/shared/ui'
import { CaseStudyCard, caseStudies } from '@/entities/case-study'

const activeCaseId = ref(caseStudies[0]!.id)

const activeCase = computed(() => 
  caseStudies.find(c => c.id === activeCaseId.value) ?? caseStudies[0]!
)

const colorStyles = computed(() => {
  const colors = {
    blue: { accent: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
    purple: { accent: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    green: { accent: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #15803d)' },
    orange: { accent: '#f97316', gradient: 'linear-gradient(135deg, #f97316, #c2410c)' },
    pink: { accent: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899, #be185d)' }
  }
  return colors[activeCase.value!.colorScheme]
})

const selectCase = (id: string) => {
  activeCaseId.value = id
}
</script>

<template>
  <section id="cases" class="cases">
    <div class="cases__container">
      <AnimatedSection animation="fade-up" class="cases__header">
        <h2 class="cases__title">Наши кейсы</h2>
        <p class="cases__subtitle">
          Реальные проекты, которые помогли нашим клиентам достичь результатов
        </p>
      </AnimatedSection>

      <div class="cases__content">
        <!-- Case list -->
        <AnimatedSection animation="slide-right" class="cases__list">
          <CaseStudyCard
            v-for="caseStudy in caseStudies"
            :key="caseStudy.id"
            :case-study="caseStudy"
            :is-active="caseStudy.id === activeCaseId"
            @select="selectCase"
          />
        </AnimatedSection>

        <!-- Case details -->
        <AnimatedSection animation="slide-left" class="cases__details">
          <div 
            class="cases__detail-card"
            :style="{ '--accent-color': colorStyles.accent, '--gradient': colorStyles.gradient }"
            :key="activeCase!.id"
          >
            <div class="cases__detail-header">
              <div class="cases__detail-icon">
                <AppIcon :name="activeCase!.icon" size="xl" />
              </div>
              <div class="cases__detail-meta">
                <span class="cases__detail-industry">{{ activeCase!.industry }}</span>
                <h3 class="cases__detail-title">{{ activeCase!.title }}</h3>
              </div>
            </div>

            <p class="cases__detail-description">{{ activeCase!.description }}</p>

            <div class="cases__detail-section">
              <h4 class="cases__detail-label">
                <span class="cases__detail-label-icon">⚡</span>
                Задача
              </h4>
              <p class="cases__detail-text">{{ activeCase!.challenge }}</p>
            </div>

            <div class="cases__detail-section">
              <h4 class="cases__detail-label">
                <span class="cases__detail-label-icon">💡</span>
                Решение
              </h4>
              <p class="cases__detail-text">{{ activeCase!.solution }}</p>
            </div>

            <!-- Results -->
            <div class="cases__results">
              <h4 class="cases__detail-label">
                <span class="cases__detail-label-icon">📈</span>
                Результаты
              </h4>
              <div class="cases__results-grid">
                <div 
                  v-for="(result, index) in activeCase!.results" 
                  :key="index"
                  class="cases__result"
                >
                  <span class="cases__result-value">{{ result.value }}</span>
                  <span class="cases__result-metric">{{ result.metric }}</span>
                  <span class="cases__result-desc">{{ result.description }}</span>
                </div>
              </div>
            </div>

            <!-- Technologies -->
            <div class="cases__technologies">
              <h4 class="cases__detail-label">
                <span class="cases__detail-label-icon">🛠</span>
                Технологии
              </h4>
              <div class="cases__tech-list">
                <span 
                  v-for="tech in activeCase!.technologies" 
                  :key="tech"
                  class="cases__tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>

    <!-- Background decoration -->
    <div class="cases__bg-decoration"></div>
  </section>
</template>


<style scoped>
.cases {
  padding: var(--spacing-4xl) var(--spacing-lg);
  background: var(--color-bg-light);
  position: relative;
  overflow: hidden;
}

.cases__container {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cases__header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.cases__title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.cases__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.cases__content {
  display: grid;
  gap: var(--spacing-2xl);
}

.cases__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

/* Detail card */
.cases__detail-card {
  background: var(--color-bg-white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cases__detail-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.cases__detail-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-xl);
  background: var(--gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.cases__detail-meta {
  flex: 1;
}

.cases__detail-industry {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-xs);
}

.cases__detail-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.cases__detail-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border);
}

.cases__detail-section {
  margin-bottom: var(--spacing-lg);
}

.cases__detail-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.cases__detail-label-icon {
  font-size: 1.2em;
}

.cases__detail-text {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* Results */
.cases__results {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.cases__results-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.cases__result {
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--color-bg-light);
  border-radius: var(--radius-xl);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cases__result:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.cases__result-value {
  display: block;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--accent-color);
  margin-bottom: var(--spacing-xs);
}

.cases__result-metric {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.cases__result-desc {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

/* Technologies */
.cases__technologies {
  margin-top: var(--spacing-xl);
}

.cases__tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.cases__tech-tag {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
}

.cases__tech-tag:hover {
  background: var(--accent-color);
  border-color: var(--accent-color);
  color: white;
  transform: scale(1.05);
}

/* Background decoration */
.cases__bg-decoration {
  position: absolute;
  top: 50%;
  right: -200px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Desktop */
@media (min-width: 1024px) {
  .cases {
    padding: var(--spacing-4xl) var(--spacing-2xl);
  }

  .cases__content {
    grid-template-columns: 380px 1fr;
    gap: var(--spacing-3xl);
    align-items: start;
  }

  .cases__list {
    position: sticky;
    top: 100px;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .cases__results-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile */
@media (max-width: 767px) {
  .cases {
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  .cases__title {
    font-size: var(--font-size-2xl);
  }

  .cases__subtitle {
    font-size: var(--font-size-base);
  }

  .cases__detail-card {
    padding: var(--spacing-lg);
  }

  .cases__detail-header {
    flex-direction: column;
    text-align: center;
  }

  .cases__detail-icon {
    width: 64px;
    height: 64px;
  }

  .cases__detail-title {
    font-size: var(--font-size-xl);
  }

  .cases__detail-description {
    font-size: var(--font-size-base);
  }

  .cases__results-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .cases__result {
    padding: var(--spacing-md);
  }

  .cases__result-value {
    font-size: var(--font-size-2xl);
  }
}

/* Small mobile */
@media (max-width: 479px) {
  .cases__header {
    margin-bottom: var(--spacing-xl);
  }

  .cases__list {
    gap: var(--spacing-sm);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .cases__detail-card {
    animation: none;
  }

  .cases__detail-icon {
    animation: none;
  }
}
</style>
