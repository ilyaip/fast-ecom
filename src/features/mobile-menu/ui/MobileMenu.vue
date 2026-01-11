<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import { useReducedMotion } from '@/shared/lib'
import { useSmoothScroll } from '@/features/smooth-scroll'

export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface MobileMenuProps {
  isOpen: boolean
  items: NavigationItem[]
}

const props = defineProps<MobileMenuProps>()

const emit = defineEmits<{
  close: []
  'item-click': [item: NavigationItem]
}>()

const { prefersReducedMotion } = useReducedMotion()
const { scrollToAnchor } = useSmoothScroll()

// Lock body scroll when menu is open
const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.touchAction = 'none'
}

const unlockBodyScroll = () => {
  document.body.style.overflow = ''
  document.body.style.touchAction = ''
}

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      lockBodyScroll()
    } else {
      unlockBodyScroll()
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  unlockBodyScroll()
})

const handleItemClick = (item: NavigationItem) => {
  const targetId = item.href.replace('#', '')
  scrollToAnchor(targetId)
  emit('item-click', item)
  emit('close')
}

const handleOverlayClick = () => {
  emit('close')
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div
        v-if="isOpen"
        class="mobile-menu-overlay"
        :class="{ 'reduced-motion': prefersReducedMotion }"
        @click="handleOverlayClick"
        @keydown="handleKeydown"
      >
        <nav
          class="mobile-menu"
          :class="{ 'reduced-motion': prefersReducedMotion }"
          role="navigation"
          aria-label="Mobile navigation"
          @click.stop
        >
          <button
            class="mobile-menu__close"
            type="button"
            aria-label="Close menu"
            @click="emit('close')"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <ul class="mobile-menu__list">
            <li
              v-for="(item, index) in items"
              :key="item.id"
              class="mobile-menu__item"
              :style="{ '--item-index': index }"
            >
              <a
                :href="item.href"
                class="mobile-menu__link"
                @click.prevent="handleItemClick(item)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>


<style scoped>
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal-backdrop, 400);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  z-index: var(--z-modal, 500);
  background: var(--color-bg-white, #ffffff);
  box-shadow: var(--shadow-xl);
  padding: var(--spacing-xl, 2rem);
  display: flex;
  flex-direction: column;
}

.mobile-menu__close {
  position: absolute;
  top: var(--spacing-lg, 1.5rem);
  right: var(--spacing-lg, 1.5rem);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--radius-md, 0.5rem);
  color: var(--color-text-primary, #1e293b);
  cursor: pointer;
  transition: background-color var(--transition-fast, 150ms ease);
}

.mobile-menu__close:hover {
  background-color: var(--color-bg-light, #f8fafc);
}

.mobile-menu__close:focus-visible {
  outline: 2px solid var(--color-primary, #3b82f6);
  outline-offset: 2px;
}

.mobile-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: var(--spacing-3xl, 4rem);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 0.5rem);
}

.mobile-menu__item {
  opacity: 0;
  transform: translateX(20px);
  animation: slideIn 0.3s ease forwards;
  animation-delay: calc(var(--item-index) * 0.05s + 0.1s);
}

.mobile-menu__link {
  display: block;
  padding: var(--spacing-md, 1rem) var(--spacing-lg, 1.5rem);
  font-size: var(--font-size-lg, 1.125rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-text-primary, #1e293b);
  text-decoration: none;
  border-radius: var(--radius-md, 0.5rem);
  transition:
    background-color var(--transition-fast, 150ms ease),
    color var(--transition-fast, 150ms ease);
}

.mobile-menu__link:hover {
  background-color: var(--color-bg-light, #f8fafc);
  color: var(--color-primary, #3b82f6);
}

.mobile-menu__link:focus-visible {
  outline: 2px solid var(--color-primary, #3b82f6);
  outline-offset: 2px;
}

/* Transition animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active .mobile-menu,
.mobile-menu-leave-active .mobile-menu {
  transition: transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu,
.mobile-menu-leave-to .mobile-menu {
  transform: translateX(100%);
}

/* Reduced motion */
.reduced-motion,
.reduced-motion .mobile-menu {
  transition: none !important;
  animation: none !important;
}

.reduced-motion .mobile-menu__item {
  opacity: 1;
  transform: none;
  animation: none;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
