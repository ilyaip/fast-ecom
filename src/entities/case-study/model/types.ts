import type { IconName } from '@/shared/ui/AppIcon.vue'

export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  description: string
  challenge: string
  solution: string
  results: CaseResult[]
  technologies: string[]
  icon: IconName
  colorScheme: 'blue' | 'purple' | 'green' | 'orange' | 'pink'
  image?: string
}

export interface CaseResult {
  metric: string
  value: string
  description: string
}
