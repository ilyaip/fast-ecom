<script setup lang="ts">
import { computed } from 'vue'

export interface AppButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const isLink = computed(() => !!props.href)

const buttonClasses = computed(() => [
  'app-button',
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
  { 'app-button--disabled': props.disabled },
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? href : undefined"
    :class="buttonClasses"
    :disabled="!isLink && disabled"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-family, inherit);
  font-weight: 600;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.app-button:focus-visible {
  outline: 2px solid var(--color-primary, #3b82f6);
  outline-offset: 2px;
}

/* Sizes */
.app-button--sm {
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm, 0.875rem);
}

.app-button--md {
  padding: 0.75rem 1.5rem;
  font-size: var(--font-size-base, 1rem);
}

.app-button--lg {
  padding: 1rem 2rem;
  font-size: var(--font-size-lg, 1.125rem);
}

/* Primary variant */
.app-button--primary {
  background: var(--color-primary, #3b82f6);
  color: white;
}

.app-button--primary:hover:not(.app-button--disabled) {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.app-button--primary:active:not(.app-button--disabled) {
  transform: translateY(0);
}

/* Secondary variant */
.app-button--secondary {
  background: var(--color-secondary, #8b5cf6);
  color: white;
}

.app-button--secondary:hover:not(.app-button--disabled) {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
}

.app-button--secondary:active:not(.app-button--disabled) {
  transform: translateY(0);
}

/* Outline variant */
.app-button--outline {
  background: transparent;
  color: var(--color-primary, #3b82f6);
  border: 2px solid var(--color-primary, #3b82f6);
}

.app-button--outline:hover:not(.app-button--disabled) {
  background: var(--color-primary, #3b82f6);
  color: white;
  transform: translateY(-2px);
}

.app-button--outline:active:not(.app-button--disabled) {
  transform: translateY(0);
}

/* Disabled state */
.app-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Small mobile (320px - 479px) */
@media (max-width: 479px) {
  .app-button--sm {
    padding: 0.375rem 0.75rem;
    font-size: var(--font-size-xs, 0.75rem);
  }

  .app-button--md {
    padding: 0.625rem 1.25rem;
    font-size: var(--font-size-sm, 0.875rem);
  }

  .app-button--lg {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-base, 1rem);
  }
}
</style>
