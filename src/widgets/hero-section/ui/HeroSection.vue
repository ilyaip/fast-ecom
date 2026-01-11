<script setup lang="ts">
import { ref } from 'vue'
import { AppLogo, AppButton, AnimatedSection, AppIcon } from '@/shared/ui'
import { useSmoothScroll } from '@/features/smooth-scroll'

const { scrollToAnchor } = useSmoothScroll()

const handleCtaClick = () => {
  scrollToAnchor('solutions')
}

// Balloon state
interface Balloon {
  id: number
  isPopped: boolean
  showLogo: boolean
}

const balloons = ref<Balloon[]>(
  Array.from({ length: 8 }, (_, i) => ({
    id: i,
    isPopped: false,
    showLogo: false
  }))
)

const popBalloon = (index: number) => {
  const balloon = balloons.value[index]
  if (!balloon || balloon.isPopped) return

  // Pop the balloon and show logo
  balloons.value[index] = {
    ...balloon,
    isPopped: true,
    showLogo: true
  }

  // Hide logo after 1.5s
  setTimeout(() => {
    const current = balloons.value[index]
    if (current) {
      balloons.value[index] = { ...current, showLogo: false }
    }
  }, 1500)

  // Respawn balloon after 3s
  setTimeout(() => {
    const current = balloons.value[index]
    if (current) {
      balloons.value[index] = { ...current, isPopped: false, showLogo: false }
    }
  }, 3000)
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__background">
      <div class="hero__gradient" />
      <div class="hero__balloons">
        <template v-for="(balloon, index) in balloons" :key="balloon.id">
          <!-- Balloon -->
          <div 
            class="hero__balloon-wrapper"
            :class="`hero__balloon-wrapper--${index + 1}`"
          >
            <div 
              v-if="!balloon.isPopped"
              class="hero__balloon"
              :class="`hero__balloon--${index + 1}`"
              @click.stop="popBalloon(index)"
            />
            <!-- Pop effect + Logo -->
            <div v-else class="hero__pop-container">
              <div class="hero__pop-effect" />
              <div 
                class="hero__pop-logo"
                :class="{ 'hero__pop-logo--visible': balloon.showLogo }"
              >
                <AppLogo size="sm" />
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="hero__container">
      <AnimatedSection animation="fade-up" class="hero__content">
        <h1 class="hero__title">
          <span class="hero__title-fast">Fast</span>
          <span class="hero__title-ecom">Ecom</span>
        </h1>

        <AnimatedSection animation="fade-up" :delay="200">
          <p class="hero__slogan">
            Для продаж в интернете – всё что угодно!
            <br />
            <span class="hero__slogan-accent">Быстро и удобно!</span>
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="400">
          <p class="hero__description">
            Создаём современные решения для e-commerce: от интернет-магазинов до AI-чатботов.
            Гибкая архитектура, быстрая разработка, масштабируемые системы.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="600">
          <div class="hero__actions">
            <AppButton variant="primary" size="lg" @click="handleCtaClick">
              Наши решения
            </AppButton>
            <AppButton variant="outline" size="lg" href="#approach">
              Узнать больше
            </AppButton>
          </div>
        </AnimatedSection>
      </AnimatedSection>

      <AnimatedSection animation="slide-left" :delay="300" class="hero__visual">
        <div class="hero__visual-card hero__visual-card--1">
          <div class="hero__visual-icon hero__visual-icon--blue">
            <AppIcon name="rocket" size="lg" animated />
          </div>
          <span class="hero__visual-text">Быстрый запуск</span>
        </div>
        <div class="hero__visual-card hero__visual-card--2">
          <div class="hero__visual-icon hero__visual-icon--yellow">
            <AppIcon name="lightning" size="lg" animated />
          </div>
          <span class="hero__visual-text">Высокая скорость</span>
        </div>
        <div class="hero__visual-card hero__visual-card--3">
          <div class="hero__visual-icon hero__visual-icon--green">
            <AppIcon name="target" size="lg" animated />
          </div>
          <span class="hero__visual-text">Точные решения</span>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: calc(80px + var(--spacing-3xl)) var(--spacing-lg) var(--spacing-3xl);
  overflow: hidden;
}

.hero__background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg-white) 50%, #e0e7ff 100%);
}

.hero__balloons {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
}

/* Balloon wrapper - handles falling animation */
.hero__balloon-wrapper {
  position: absolute;
  animation: balloon-fall linear infinite;
}

.hero__balloon-wrapper--1 { left: 5%; width: 80px; height: 80px; animation-duration: 25s; animation-delay: 0s; }
.hero__balloon-wrapper--2 { left: 18%; width: 110px; height: 110px; animation-duration: 30s; animation-delay: -5s; }
.hero__balloon-wrapper--3 { left: 32%; width: 60px; height: 60px; animation-duration: 22s; animation-delay: -10s; }
.hero__balloon-wrapper--4 { left: 48%; width: 90px; height: 90px; animation-duration: 28s; animation-delay: -3s; }
.hero__balloon-wrapper--5 { left: 62%; width: 70px; height: 70px; animation-duration: 24s; animation-delay: -15s; }
.hero__balloon-wrapper--6 { left: 75%; width: 85px; height: 85px; animation-duration: 26s; animation-delay: -8s; }
.hero__balloon-wrapper--7 { left: 88%; width: 55px; height: 55px; animation-duration: 20s; animation-delay: -12s; }
.hero__balloon-wrapper--8 { left: 10%; width: 100px; height: 100px; animation-duration: 32s; animation-delay: -18s; }

@keyframes balloon-fall {
  0% {
    top: -15%;
    transform: translateX(0);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-20px);
  }
  75% {
    transform: translateX(15px);
  }
  100% {
    top: 110%;
    transform: translateX(0);
  }
}

/* Balloon itself */
.hero__balloon {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.75;
  box-shadow: 
    inset -10px -10px 30px rgba(255, 255, 255, 0.4),
    inset 5px 5px 15px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.hero__balloon:hover {
  transform: scale(1.15);
  opacity: 0.9;
}

.hero__balloon:active {
  transform: scale(0.95);
}

/* Balloon colors */
.hero__balloon--1 { background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.2)); }
.hero__balloon--2 { background: radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.6), rgba(139, 92, 246, 0.2)); }
.hero__balloon--3 { background: radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.6), rgba(16, 185, 129, 0.2)); }
.hero__balloon--4 { background: radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.6), rgba(245, 158, 11, 0.2)); }
.hero__balloon--5 { background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.55), rgba(139, 92, 246, 0.2)); }
.hero__balloon--6 { background: radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.55), rgba(59, 130, 246, 0.2)); }
.hero__balloon--7 { background: radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.55), rgba(59, 130, 246, 0.2)); }
.hero__balloon--8 { background: radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.5), rgba(139, 92, 246, 0.2)); }

/* Pop effect */
.hero__pop-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero__pop-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
  animation: pop-burst 0.5s ease-out forwards;
}

@keyframes pop-burst {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.hero__pop-logo {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.3);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.hero__pop-logo--visible {
  opacity: 1;
  transform: scale(1);
}

/* Main content - above balloons */
.hero__container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero__content {
  text-align: center;
}

.hero__title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-lg);
}

.hero__title-fast {
  color: var(--color-primary);
}

.hero__title-ecom {
  color: var(--color-text-primary);
}

.hero__slogan {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
}

.hero__slogan-accent {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.hero__description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
}

.hero__actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  justify-content: center;
}

.hero__visual {
  display: none;
}

.hero__visual-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-bg-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.hero__visual-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.hero__visual-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.hero__visual-icon--blue {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05));
  color: var(--color-primary);
}

.hero__visual-icon--yellow {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05));
  color: #f59e0b;
}

.hero__visual-icon--green {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05));
  color: var(--color-accent);
}

.hero__visual-card:hover .hero__visual-icon {
  transform: scale(1.1);
}

.hero__visual-text {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

/* Tablet */
@media (min-width: 640px) {
  .hero__title {
    font-size: var(--font-size-6xl);
  }

  .hero__actions {
    flex-direction: row;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero {
    padding: calc(80px + var(--spacing-4xl)) var(--spacing-2xl) var(--spacing-4xl);
  }

  .hero__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-4xl);
  }

  .hero__content {
    text-align: left;
  }

  .hero__description {
    margin: 0 0 var(--spacing-xl);
  }

  .hero__actions {
    justify-content: flex-start;
  }

  .hero__visual {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl);
  }

  .hero__visual-card--1 {
    align-self: flex-start;
    animation: slideInRight 0.6s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .hero__visual-card--2 {
    align-self: center;
    animation: slideInRight 0.6s ease forwards;
    animation-delay: 0.7s;
    opacity: 0;
  }

  .hero__visual-card--3 {
    align-self: flex-end;
    animation: slideInRight 0.6s ease forwards;
    animation-delay: 0.9s;
    opacity: 0;
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

/* Small mobile */
@media (max-width: 479px) {
  .hero {
    padding: calc(70px + var(--spacing-xl)) var(--spacing-md) var(--spacing-xl);
    min-height: auto;
  }

  .hero__title {
    font-size: var(--font-size-3xl);
  }

  .hero__slogan {
    font-size: var(--font-size-base);
  }

  .hero__description {
    font-size: var(--font-size-base);
  }

  .hero__actions {
    width: 100%;
  }

  .hero__actions :deep(.app-button) {
    width: 100%;
  }

  /* Hide some balloons on mobile */
  .hero__balloon-wrapper--3,
  .hero__balloon-wrapper--5,
  .hero__balloon-wrapper--7 {
    display: none;
  }
}

/* Medium mobile */
@media (min-width: 480px) and (max-width: 639px) {
  .hero__title {
    font-size: var(--font-size-4xl);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero__balloon-wrapper {
    animation: none;
    top: 30%;
  }

  .hero__visual-card--1,
  .hero__visual-card--2,
  .hero__visual-card--3 {
    animation: none;
    opacity: 1;
  }
}
</style>
