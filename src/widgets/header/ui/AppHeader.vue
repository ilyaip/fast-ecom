<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { AppLogo } from '@/shared/ui'
import { MobileMenu } from '@/features/mobile-menu'
import { useSmoothScroll } from '@/features/smooth-scroll'

export interface NavigationItem {
  id: string
  label: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { id: 'hero', label: 'Главная', href: '#hero' },
  { id: 'solutions', label: 'Решения', href: '#solutions' },
  { id: 'approach', label: 'Подход', href: '#approach' },
  { id: 'team', label: 'Команда', href: '#team' }
]

const { handleAnchorClick } = useSmoothScroll()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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
  <header class="app-header" :class="{ 'app-header--scrolled': isScrolled }">
    <div class="app-header__container">
      <a href="#hero" class="app-header__logo-link" @click="handleAnchorClick">
        <AppLogo size="md" />
      </a>

      <nav class="app-header__nav" role="navigation" aria-label="Main navigation">
        <ul class="app-header__nav-list">
          <li v-for="item in navigationItems" :key="item.id" class="app-header__nav-item">
            <a
              :href="item.href"
              class="app-header__nav-link"
              @click="handleAnchorClick"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        class="app-header__burger"
        type="button"
        aria-label="Open menu"
        :aria-expanded="isMobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <span class="app-header__burger-line" />
        <span class="app-header__burger-line" />
        <span class="app-header__burger-line" />
      </button>
    </div>

    <MobileMenu
      :is-open="isMobileMenuOpen"
      :items="navigationItems"
      @close="closeMobileMenu"
    />
  </header>
</template>


<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  transition: background-color var(--transition-base), box-shadow var(--transition-base);
}

.app-header--scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
}

.app-header__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-header__logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.app-header__nav {
  display: none;
}

.app-header__nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: var(--spacing-xl);
}

.app-header__nav-link {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  text-decoration: none;
  padding: var(--spacing-sm) 0;
  position: relative;
  transition: color var(--transition-fast);
}

.app-header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.app-header__nav-link:hover {
  color: var(--color-primary);
}

.app-header__nav-link:hover::after {
  width: 100%;
}

.app-header__burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.app-header__burger:hover {
  background: var(--color-bg-light);
}

.app-header__burger:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.app-header__burger-line {
  width: 100%;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 1px;
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

/* Desktop styles */
@media (min-width: 768px) {
  .app-header__container {
    padding: var(--spacing-lg) var(--spacing-xl);
  }

  .app-header__nav {
    display: block;
  }

  .app-header__burger {
    display: none;
  }
}

@media (min-width: 1024px) {
  .app-header__container {
    padding: var(--spacing-lg) var(--spacing-2xl);
  }
}

/* Small mobile (320px - 479px) */
@media (max-width: 479px) {
  .app-header__container {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .app-header__burger {
    width: 36px;
    height: 36px;
    padding: 6px;
  }
}
</style>
