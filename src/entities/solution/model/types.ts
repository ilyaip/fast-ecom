import type { IconName } from '@/shared/ui/AppIcon.vue'

export interface Solution {
  id: string
  title: string
  description: string
  icon: IconName
  colorScheme: 'blue' | 'purple' | 'green' | 'orange'
  features?: string[]
}
