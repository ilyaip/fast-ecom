import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  root?: Element | null
}

export function useIntersectionObserver(
  target: Ref<Element | null>,
  options: UseIntersectionObserverOptions = {}
) {
  const isVisible = ref(false)
  const hasBeenVisible = ref(false)

  const { threshold = 0.1, rootMargin = '0px', root = null } = options

  let observer: IntersectionObserver | null = null

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      isVisible.value = entry.isIntersecting
      if (entry.isIntersecting) {
        hasBeenVisible.value = true
      }
    })
  }

  onMounted(() => {
    if (!target.value) return

    if (!('IntersectionObserver' in window)) {
      // Fallback: show content immediately if IntersectionObserver not supported
      isVisible.value = true
      hasBeenVisible.value = true
      return
    }

    observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
      root,
    })

    observer.observe(target.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return {
    isVisible,
    hasBeenVisible,
  }
}
