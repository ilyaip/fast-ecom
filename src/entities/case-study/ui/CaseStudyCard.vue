<script setup lang="ts">
import { computed } from 'vue'
import type { CaseStudy } from '../model/types'
import { AppIcon } from '@/shared/ui'

interface Props {
  caseStudy: CaseStudy
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

const emit = defineEmits<{
  select: [id: string]
}>()

const colorClasses = computed(() => {
  const colors = {
    blue: { bg: 'rgba(59, 130, 246, 0.1)', accent: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
    purple: { bg: 'rgba(139, 92, 246, 0.1)', accent: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
    green: { bg: 'rgba(34, 197, 94, 0.1)', accent: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #15803d)' },
    orange: { bg: 'rgba(249, 115, 22, 0.1)', accent: '#f97316', gradient: 'linear-gradient(135deg, #f97316, #c2410c)' },
    pink: { bg: 'rgba(236, 72, 153, 0.1)', accent: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899, #be185d)' }
  }
  return colors[props.caseStudy.colorScheme]
})
</script>

<template>
  <article
    class="case-card"
    :class="{ 'case-card--active': isActive }"
    :style="{ '--accent-color': colorClasses.accent, '--bg-color': colorClasses.bg, '--gradient': colorClasses.gradient }"
    @click="emit('select', caseStudy.id)"
  >
    <div class="case-card__icon">
      <AppIcon :name="caseStudy.icon" size="lg" animated />
    </div>
    
    <div class="case-card__content">
      <span class="case-card__industry">{{ caseStudy.industry }}</span>
      <h3 class="case-card__title">{{ caseStudy.title }}</h3>
      <p class="case-card__client">{{ caseStudy.client }}</p>
    </div>

    <div class="case-card__indicator">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  </article>
</template>

<style scoped>
.case-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-bg-white);
  border: 2px solid transparent;
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.case-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--bg-color);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.case-card:hover::before,
.case-card--active::before {
  opacity: 1;
}

.case-card:hover,
.case-card--active {
  border-color: var(--accent-color);
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.case-card__icon {
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.case-card:hover .case-card__icon,
.case-card--active .case-card__icon {
  transform: scale(1.1) rotate(5deg);
}

.case-card__content {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
}

.case-card__industry {
  display: inline-block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-xs);
}

.case-card__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.case-card__client {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.case-card__indicator {
  position: relative;
  z-index: 1;
  color: var(--accent-color);
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.case-card:hover .case-card__indicator,
.case-card--active .case-card__indicator {
  opacity: 1;
  transform: translateX(0);
}

/* Mobile */
@media (max-width: 639px) {
  .case-card {
    padding: var(--spacing-md);
  }

  .case-card__icon {
    width: 48px;
    height: 48px;
  }

  .case-card__title {
    font-size: var(--font-size-base);
  }
}
</style>
