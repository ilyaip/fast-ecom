<script setup lang="ts">
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '../lib/useIntersectionObserver'
import { useReducedMotion } from '../lib/useReducedMotion'

export interface AnimatedSectionProps {
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
  delay?: number
  threshold?: number
}

const props = withDefaults(defineProps<AnimatedSectionProps>(), {
  animation: 'fade-up',
  delay: 0,
  threshold: 0.1,
})

const sectionRef = ref<HTMLElement | null>(null)
const { hasBeenVisible } = useIntersectionObserver(sectionRef, {
  threshold: props.threshold,
})
const { prefersReducedMotion } = useReducedMotion()

const animationClass = computed(() => {
  if (prefersReducedMotion.value) {
    return 'animated-section--visible'
  }
  return hasBeenVisible.value
    ? `animated-section--${props.animation} animated-section--visible`
    : `animated-section--${props.animation}`
})

const animationStyle = computed(() => {
  if (prefersReducedMotion.value || props.delay === 0) {
    return {}
  }
  return {
    transitionDelay: `${props.delay}ms`,
    animationDelay: `${props.delay}ms`,
  }
})
</script>

<template>
  <div ref="sectionRef" :class="['animated-section', animationClass]" :style="animationStyle">
    <slot />
  </div>
</template>

<style scoped>
.animated-section {
  will-change: opacity, transform;
}

/* Fade Up */
.animated-section--fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.animated-section--fade-up.animated-section--visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade In */
.animated-section--fade-in {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.animated-section--fade-in.animated-section--visible {
  opacity: 1;
}

/* Slide Left */
.animated-section--slide-left {
  opacity: 0;
  transform: translateX(50px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.animated-section--slide-left.animated-section--visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Right */
.animated-section--slide-right {
  opacity: 0;
  transform: translateX(-50px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.animated-section--slide-right.animated-section--visible {
  opacity: 1;
  transform: translateX(0);
}

/* Visible state without animation class (for reduced motion) */
.animated-section--visible {
  opacity: 1;
  transform: none;
}
</style>
