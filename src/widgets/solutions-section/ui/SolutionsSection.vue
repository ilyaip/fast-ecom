<script setup lang="ts">
import { AnimatedSection } from '@/shared/ui'
import { SolutionCard, solutions } from '@/entities/solution'
</script>

<template>
  <section id="solutions" class="solutions">
    <div class="solutions__container">
      <AnimatedSection animation="fade-up" class="solutions__header">
        <h2 class="solutions__title">Наши решения</h2>
        <p class="solutions__subtitle">
          Комплексные инструменты для успешных продаж в интернете
        </p>
      </AnimatedSection>

      <div class="solutions__grid">
        <AnimatedSection
          v-for="(solution, index) in solutions"
          :key="solution.id"
          animation="fade-up"
          :delay="index * 100"
        >
          <SolutionCard :solution="solution" />
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions {
  padding: var(--spacing-4xl) var(--spacing-lg);
  background: var(--color-bg-light);
}

.solutions__container {
  max-width: 1280px;
  margin: 0 auto;
}

.solutions__header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.solutions__title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.solutions__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.solutions__grid {
  display: grid;
  gap: var(--spacing-xl);
}

/* Tablet */
@media (min-width: 640px) {
  .solutions__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .solutions {
    padding: var(--spacing-4xl) var(--spacing-2xl);
  }

  .solutions__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-2xl);
  }
}

@media (min-width: 1280px) {
  .solutions__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Small mobile (320px - 479px) */
@media (max-width: 479px) {
  .solutions {
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  .solutions__title {
    font-size: var(--font-size-2xl);
  }

  .solutions__subtitle {
    font-size: var(--font-size-base);
  }

  .solutions__header {
    margin-bottom: var(--spacing-xl);
  }

  .solutions__grid {
    gap: var(--spacing-md);
  }
}
</style>
