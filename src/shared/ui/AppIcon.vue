<script setup lang="ts">
import { computed } from 'vue'

export type IconName = 
  | 'rocket' 
  | 'lightning' 
  | 'target' 
  | 'cart' 
  | 'bot' 
  | 'chart' 
  | 'trending'
  | 'vue'
  | 'node'
  | 'database'
  | 'docker'
  | 'brain'
  | 'speed'
  | 'settings'
  | 'handshake'

interface Props {
  name: IconName
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  animated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  animated: false
})

const sizeMap = {
  sm: 20,
  md: 28,
  lg: 40,
  xl: 56
}

const iconSize = computed(() => sizeMap[props.size])
</script>

<template>
  <div 
    class="app-icon" 
    :class="[
      `app-icon--${size}`,
      { 'app-icon--animated': animated }
    ]"
    :style="{ color: color }"
  >
    <!-- Rocket -->
    <svg v-if="name === 'rocket'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      <circle class="app-icon__flame" cx="7" cy="17" r="1" fill="currentColor" opacity="0.6"/>
    </svg>

    <!-- Lightning -->
    <svg v-else-if="name === 'lightning'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path class="app-icon__bolt" d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" opacity="0.15"/>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>

    <!-- Target -->
    <svg v-else-if="name === 'target'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle class="app-icon__center" cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>

    <!-- Cart -->
    <svg v-else-if="name === 'cart'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="21" r="1"/>
      <circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>

    <!-- Bot -->
    <svg v-else-if="name === 'bot'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
      <circle class="app-icon__eye" cx="8" cy="16" r="1" fill="currentColor"/>
      <circle class="app-icon__eye" cx="16" cy="16" r="1" fill="currentColor"/>
    </svg>

    <!-- Chart -->
    <svg v-else-if="name === 'chart'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3v18h18"/>
      <path class="app-icon__bar" d="M18 17V9"/>
      <path class="app-icon__bar" d="M13 17V5"/>
      <path class="app-icon__bar" d="M8 17v-3"/>
    </svg>

    <!-- Trending -->
    <svg v-else-if="name === 'trending'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline class="app-icon__line" points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>

    <!-- Vue -->
    <svg v-else-if="name === 'vue'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3zm5 0h3l4 7.5L18 3h3l-9 16L3 3z" opacity="0.8"/>
    </svg>

    <!-- Node -->
    <svg v-else-if="name === 'node'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
      <path d="M12 22V12"/>
      <path d="M12 12L3 7"/>
      <path d="M12 12l9-5"/>
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3"/>
    </svg>

    <!-- Database -->
    <svg v-else-if="name === 'database'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>

    <!-- Docker -->
    <svg v-else-if="name === 'docker'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 12.5c-.5-1-1.5-1.5-3-1.5h-1v-2h-3v2h-2V9H9v2H7V9H4v2H2c0 3 1 5 4 6 1 .5 3 1 6 1 5 0 8-2 10-5.5z"/>
      <rect x="5" y="5" width="2" height="2"/>
      <rect x="8" y="5" width="2" height="2"/>
      <rect x="11" y="5" width="2" height="2"/>
      <rect x="8" y="2" width="2" height="2"/>
    </svg>

    <!-- Brain -->
    <svg v-else-if="name === 'brain'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
      <path d="M12 5v13"/>
      <path class="app-icon__pulse" d="M9 9h6"/>
      <path class="app-icon__pulse" d="M9 13h6"/>
    </svg>

    <!-- Speed -->
    <svg v-else-if="name === 'speed'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4"/>
      <path d="m4.93 4.93 2.83 2.83"/>
      <path d="M2 12h4"/>
      <path d="m4.93 19.07 2.83-2.83"/>
      <path d="M12 22v-4"/>
      <path d="m19.07 19.07-2.83-2.83"/>
      <path d="M22 12h-4"/>
      <path d="m19.07 4.93-2.83 2.83"/>
      <circle cx="12" cy="12" r="4"/>
      <path class="app-icon__needle" d="M12 9v3l2 1"/>
    </svg>

    <!-- Settings -->
    <svg v-else-if="name === 'settings'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>

    <!-- Handshake -->
    <svg v-else-if="name === 'handshake'" :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 17a4 4 0 0 0 4-4V9a4 4 0 0 0-8 0v4a4 4 0 0 0 4 4Z"/>
      <path d="M7 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3"/>
      <path d="M17 9h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3"/>
      <path d="M11 17v4"/>
      <path d="M7 21h8"/>
    </svg>
  </div>
</template>

<style scoped>
.app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, color 0.3s ease;
}

.app-icon svg {
  transition: transform 0.3s ease;
}

/* Animated state */
.app-icon--animated:hover svg {
  transform: scale(1.1);
}

.app-icon--animated:hover .app-icon__flame {
  animation: flame 0.5s ease infinite;
}

.app-icon--animated:hover .app-icon__bolt {
  animation: pulse 0.8s ease infinite;
}

.app-icon--animated:hover .app-icon__center {
  animation: pulse 1s ease infinite;
}

.app-icon--animated:hover .app-icon__eye {
  animation: blink 2s ease infinite;
}

.app-icon--animated:hover .app-icon__bar {
  animation: grow 0.6s ease infinite alternate;
}

.app-icon--animated:hover .app-icon__line {
  animation: draw 1.5s ease infinite;
}

.app-icon--animated:hover .app-icon__pulse {
  animation: pulse 1s ease infinite;
}

.app-icon--animated:hover .app-icon__needle {
  animation: rotate 2s linear infinite;
  transform-origin: 12px 12px;
}

@keyframes flame {
  0%, 100% { opacity: 0.6; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-2px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.4; }
}

@keyframes blink {
  0%, 90%, 100% { opacity: 1; }
  95% { opacity: 0; }
}

@keyframes grow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 5; }
}

@keyframes draw {
  0% { stroke-dasharray: 0 100; }
  100% { stroke-dasharray: 100 0; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .app-icon--animated:hover svg,
  .app-icon--animated:hover .app-icon__flame,
  .app-icon--animated:hover .app-icon__bolt,
  .app-icon--animated:hover .app-icon__center,
  .app-icon--animated:hover .app-icon__eye,
  .app-icon--animated:hover .app-icon__bar,
  .app-icon--animated:hover .app-icon__line,
  .app-icon--animated:hover .app-icon__pulse,
  .app-icon--animated:hover .app-icon__needle {
    animation: none;
    transform: none;
  }
}
</style>
