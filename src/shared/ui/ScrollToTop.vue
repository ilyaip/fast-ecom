<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const isHovered = ref(false)
const scrollProgress = ref(0)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  
  isVisible.value = scrollTop > 400
  scrollProgress.value = Math.min((scrollTop / docHeight) * 100, 100)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="scroll-btn">
    <button
      v-show="isVisible"
      class="scroll-to-top"
      :class="{ 'scroll-to-top--hovered': isHovered }"
      type="button"
      aria-label="Вернуться наверх"
      @click="scrollToTop"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Progress ring -->
      <svg class="scroll-to-top__progress" viewBox="0 0 48 48">
        <circle
          class="scroll-to-top__progress-bg"
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke-width="3"
        />
        <circle
          class="scroll-to-top__progress-bar"
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke-width="3"
          :stroke-dasharray="132"
          :stroke-dashoffset="132 - (132 * scrollProgress) / 100"
        />
      </svg>
      
      <!-- Arrow icon -->
      <div class="scroll-to-top__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </div>

      <!-- Ripple effect -->
      <span class="scroll-to-top__ripple"></span>
      
      <!-- Tooltip -->
      <span class="scroll-to-top__tooltip">Наверх</span>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark, #1d4ed8));
  color: white;
  cursor: pointer;
  z-index: var(--z-fixed, 100);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.scroll-to-top:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
}

.scroll-to-top:active {
  transform: translateY(-2px) scale(1.05);
}

.scroll-to-top:focus-visible {
  outline: 3px solid rgba(59, 130, 246, 0.5);
  outline-offset: 3px;
}

/* Progress ring */
.scroll-to-top__progress {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.scroll-to-top__progress-bg {
  stroke: rgba(255, 255, 255, 0.2);
}

.scroll-to-top__progress-bar {
  stroke: white;
  transition: stroke-dashoffset 0.1s ease;
}

/* Arrow icon */
.scroll-to-top__icon {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.scroll-to-top:hover .scroll-to-top__icon {
  animation: bounce 0.6s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

/* Ripple effect */
.scroll-to-top__ripple {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  opacity: 0;
}

.scroll-to-top:hover .scroll-to-top__ripple {
  animation: ripple 1s ease-out infinite;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Tooltip */
.scroll-to-top__tooltip {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(-8px);
  padding: 6px 12px;
  background: var(--color-text-primary, #1f2937);
  color: white;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  pointer-events: none;
}

.scroll-to-top__tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: var(--color-text-primary, #1f2937);
}

.scroll-to-top:hover .scroll-to-top__tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(-12px);
}

/* Transition animations */
.scroll-btn-enter-active {
  animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-btn-leave-active {
  animation: slideOutDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideOutDown {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
}

/* Mobile adjustments */
@media (max-width: 639px) {
  .scroll-to-top {
    bottom: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
  }

  .scroll-to-top__icon {
    width: 18px;
    height: 18px;
  }

  .scroll-to-top__tooltip {
    display: none;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .scroll-to-top,
  .scroll-to-top__icon,
  .scroll-to-top__ripple {
    animation: none !important;
    transition: opacity 0.2s ease !important;
  }

  .scroll-to-top:hover {
    transform: none;
  }
}
</style>
