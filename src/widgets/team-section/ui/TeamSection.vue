<script setup lang="ts">
import { AnimatedSection, AppIcon } from '@/shared/ui'
import { TeamMemberCard, teamMembers } from '@/entities/team-member'
</script>

<template>
  <section id="team" class="team">
    <div class="team__container">
      <AnimatedSection animation="fade-up" class="team__header">
        <h2 class="team__title">Наша команда</h2>
        <p class="team__subtitle">
          Профессионалы, которые создают решения для вашего бизнеса
        </p>
      </AnimatedSection>

      <div class="team__grid">
        <AnimatedSection
          v-for="(member, index) in teamMembers"
          :key="member.id"
          animation="fade-up"
          :delay="index * 100"
        >
          <TeamMemberCard :member="member" />
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fade-up" :delay="500" class="team__cta">
        <div class="team__cta-card">
          <div class="team__cta-icon">
            <AppIcon name="handshake" size="xl" color="var(--color-primary)" animated />
          </div>
          <h3 class="team__cta-title">Присоединяйтесь к нам</h3>
          <p class="team__cta-text">
            Мы всегда открыты для сотрудничества и новых партнёрств.
            Скоро здесь появится ссылка на наш клуб.
          </p>
          <span class="team__cta-badge">Скоро</span>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>

<style scoped>
.team {
  padding: var(--spacing-4xl) var(--spacing-lg);
  background: var(--color-bg-light);
}

.team__container {
  max-width: 1280px;
  margin: 0 auto;
}

.team__header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.team__title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.team__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.team__grid {
  display: grid;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

/* CTA Card */
.team__cta {
  display: flex;
  justify-content: center;
}

.team__cta-card {
  position: relative;
  text-align: center;
  padding: var(--spacing-2xl);
  background: var(--color-bg-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  max-width: 400px;
  border: 2px dashed var(--color-primary);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.team__cta-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.team__cta-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  transition: transform 0.3s ease;
}

.team__cta-card:hover .team__cta-icon {
  transform: scale(1.1) rotate(5deg);
}

.team__cta-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.team__cta-text {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.team__cta-badge {
  position: absolute;
  top: -12px;
  right: -12px;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-secondary);
  color: white;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-full);
}

/* Tablet */
@media (min-width: 640px) {
  .team__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .team {
    padding: var(--spacing-4xl) var(--spacing-2xl);
  }

  .team__grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-2xl);
  }
}

/* Small mobile (320px - 479px) */
@media (max-width: 479px) {
  .team {
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  .team__title {
    font-size: var(--font-size-2xl);
  }

  .team__subtitle {
    font-size: var(--font-size-base);
  }

  .team__header {
    margin-bottom: var(--spacing-xl);
  }

  .team__grid {
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
  }

  .team__cta-card {
    padding: var(--spacing-lg);
    max-width: 100%;
  }

  .team__cta-icon {
    font-size: 2rem;
  }

  .team__cta-title {
    font-size: var(--font-size-lg);
  }

  .team__cta-text {
    font-size: var(--font-size-sm);
  }

  .team__cta-badge {
    top: -8px;
    right: -8px;
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-xs);
  }
}
</style>
