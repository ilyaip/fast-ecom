import { ref, onMounted, onUnmounted } from 'vue'

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)

  let mediaQuery: MediaQueryList | null = null

  const updateMotionPreference = (event: MediaQueryListEvent | MediaQueryList) => {
    prefersReducedMotion.value = event.matches
  }

  onMounted(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mediaQuery.matches

    mediaQuery.addEventListener('change', updateMotionPreference)
  })

  onUnmounted(() => {
    if (mediaQuery) {
      mediaQuery.removeEventListener('change', updateMotionPreference)
    }
  })

  return {
    prefersReducedMotion,
  }
}
