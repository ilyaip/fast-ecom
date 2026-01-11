<script setup lang="ts">
import { ref } from 'vue'

export interface AppLogoProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

const props = withDefaults(defineProps<AppLogoProps>(), {
  src: '/logo.svg',
  alt: 'Fast Ecom',
  size: 'md',
  variant: 'light',
})

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>

<template>
  <div :class="['app-logo', `app-logo--${size}`, `app-logo--${variant}`]">
    <img 
      src="/testlogo.png" 
      alt="Logo" 
      class="app-logo__icon"
    />
    <img
      v-if="!imageError"
      :src="src"
      :alt="alt"
      class="app-logo__image"
      @error="handleImageError"
    />
    <span v-else class="app-logo__fallback">
      <span class="app-logo__fast">Fast</span>
      <span class="app-logo__ecom">Ecom</span>
    </span>
  </div>
</template>

<style scoped>
.app-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.app-logo__icon {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.app-logo__image {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.app-logo__fallback {
  font-family: var(--font-family, inherit);
  font-weight: 700;
  display: flex;
  gap: 0.25rem;
}

.app-logo__fast {
  color: var(--color-primary, #3b82f6);
}

.app-logo__ecom {
  color: var(--color-text-primary, #1e293b);
}

/* Dark variant for dark backgrounds */
.app-logo--dark .app-logo__ecom {
  color: var(--color-text-white, #ffffff);
}

/* Sizes */
.app-logo--sm {
  height: 28px;
}

.app-logo--sm .app-logo__fallback {
  font-size: 1.125rem;
}

.app-logo--md {
  height: 36px;
}

.app-logo--md .app-logo__fallback {
  font-size: 1.5rem;
}

.app-logo--lg {
  height: 48px;
}

.app-logo--lg .app-logo__fallback {
  font-size: 2rem;
}
</style>
