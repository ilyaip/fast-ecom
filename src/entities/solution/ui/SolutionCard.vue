<script setup lang="ts">
import type { Solution } from '../model/types'
import { AppIcon } from '@/shared/ui'

interface Props {
  solution: Solution
}

defineProps<Props>()
</script>

<template>
  <div class="solution-card" :class="`solution-card--${solution.colorScheme}`">
    <div class="solution-card__icon">
      <AppIcon :name="solution.icon" size="xl" animated />
    </div>
    <h3 class="solution-card__title">{{ solution.title }}</h3>
    <p class="solution-card__description">{{ solution.description }}</p>
    <ul v-if="solution.features?.length" class="solution-card__features">
      <li
        v-for="feature in solution.features"
        :key="feature"
        class="solution-card__feature"
      >
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.solution-card {
  position: relative;
  padding: 2rem;
  border-radius: 1rem;
  background: var(--color-bg-white);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  overflow: hidden;
}

.solution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  transition: height var(--transition-base);
}

.solution-card--blue::before {
  background: var(--scheme-blue);
}

.solution-card--purple::before {
  background: var(--scheme-purple);
}

.solution-card--green::before {
  background: var(--scheme-green);
}

.solution-card--orange::before {
  background: var(--scheme-orange);
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.solution-card:hover::before {
  height: 6px;
}

.solution-card__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform var(--transition-base);
}

.solution-card--blue .solution-card__icon {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05));
  color: var(--color-primary);
}

.solution-card--purple .solution-card__icon {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05));
  color: var(--color-secondary);
}

.solution-card--green .solution-card__icon {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05));
  color: var(--color-accent);
}

.solution-card--orange .solution-card__icon {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05));
  color: #f59e0b;
}

.solution-card:hover .solution-card__icon {
  transform: scale(1.1);
}

.solution-card__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
}

.solution-card__description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.solution-card__features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.solution-card__feature {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  padding-left: 1.25rem;
  position: relative;
}

.solution-card__feature::before {
  content: '✓';
  position: absolute;
  left: 0;
  font-weight: 600;
}

.solution-card--blue .solution-card__feature::before {
  color: var(--color-primary);
}

.solution-card--purple .solution-card__feature::before {
  color: var(--color-secondary);
}

.solution-card--green .solution-card__feature::before {
  color: var(--color-accent);
}

.solution-card--orange .solution-card__feature::before {
  color: #F59E0B;
}

@media (max-width: 768px) {
  .solution-card {
    padding: 1.5rem;
  }

  .solution-card__icon {
    font-size: 2.5rem;
  }

  .solution-card__title {
    font-size: var(--font-size-lg);
  }
}

/* Small mobile (320px - 479px) */
@media (max-width: 479px) {
  .solution-card {
    padding: 1.25rem;
  }

  .solution-card__icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .solution-card__title {
    font-size: var(--font-size-base);
    margin-bottom: 0.5rem;
  }

  .solution-card__description {
    font-size: var(--font-size-sm);
    margin-bottom: 0.75rem;
  }

  .solution-card__feature {
    font-size: var(--font-size-xs);
  }

  .solution-card:hover {
    transform: translateY(-4px);
  }
}
</style>
