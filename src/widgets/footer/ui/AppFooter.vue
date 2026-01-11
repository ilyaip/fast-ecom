<script setup lang="ts">
import { AppLogo } from '@/shared/ui'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <div class="app-footer__brand">
        <AppLogo size="md" variant="dark" />
        <p class="app-footer__tagline">
          Для продаж в интернете – всё что угодно!
        </p>
      </div>

      <div class="app-footer__divider" />

      <div class="app-footer__bottom">
        <p class="app-footer__copyright">
          © {{ currentYear }} Fast Ecom. Все права защищены.
        </p>
        <p class="app-footer__made-with">
          Сделано с 💙 на Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-xl);
  background: var(--color-bg-dark);
  color: var(--color-text-white);
}

.app-footer__container {
  max-width: 1280px;
  margin: 0 auto;
}

.app-footer__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  text-align: center;
}

.app-footer__tagline {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  max-width: 300px;
}

.app-footer__divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: var(--spacing-xl) 0;
}

.app-footer__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  text-align: center;
}

.app-footer__copyright {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.app-footer__made-with {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

/* Desktop */
@media (min-width: 768px) {
  .app-footer {
    padding: var(--spacing-3xl) var(--spacing-2xl) var(--spacing-xl);
  }

  .app-footer__bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

/* Small mobile (320px - 479px) */
@media (max-width: 479px) {
  .app-footer {
    padding: var(--spacing-xl) var(--spacing-md) var(--spacing-md);
  }

  .app-footer__tagline {
    font-size: var(--font-size-sm);
  }

  .app-footer__divider {
    margin: var(--spacing-md) 0;
  }

  .app-footer__copyright,
  .app-footer__made-with {
    font-size: var(--font-size-xs);
  }
}
</style>
