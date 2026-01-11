import { useReducedMotion } from '@/shared/lib'

export interface UseSmoothScrollOptions {
  /** Offset from top in pixels (e.g., for sticky header) */
  offset?: number
  /** Scroll behavior - 'smooth' or 'auto' */
  behavior?: ScrollBehavior
}

const DEFAULT_HEADER_HEIGHT = 80

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { prefersReducedMotion } = useReducedMotion()

  const { offset = DEFAULT_HEADER_HEIGHT, behavior = 'smooth' } = options

  /**
   * Scrolls to an element by its ID (anchor)
   * @param targetId - The ID of the target element (without #)
   */
  const scrollToAnchor = (targetId: string): void => {
    const element = document.getElementById(targetId)

    if (!element) {
      console.warn(`[useSmoothScroll] Element with id "${targetId}" not found`)
      return
    }

    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion.value ? 'auto' : behavior,
    })
  }

  /**
   * Handles click on anchor links (e.g., <a href="#section">)
   * @param event - Click event
   */
  const handleAnchorClick = (event: MouseEvent): void => {
    const target = event.currentTarget as HTMLAnchorElement

    if (!target || !target.hash) return

    const targetId = target.hash.slice(1) // Remove # from href

    if (!targetId) return

    event.preventDefault()
    scrollToAnchor(targetId)

    // Update URL hash without jumping
    if (history.pushState) {
      history.pushState(null, '', target.hash)
    }
  }

  /**
   * Scrolls to top of the page
   */
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.value ? 'auto' : behavior,
    })
  }

  return {
    scrollToAnchor,
    handleAnchorClick,
    scrollToTop,
  }
}
