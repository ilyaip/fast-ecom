import type { TeamMember } from './types'

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Александр Петров',
    role: 'CEO & Founder',
    description: 'Более 10 лет опыта в e-commerce. Эксперт по масштабированию онлайн-бизнеса.',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    socialLinks: {
      telegram: 'https://t.me/placeholder',
      linkedin: 'https://linkedin.com/in/placeholder'
    }
  },
  {
    id: 'member-2',
    name: 'Мария Иванова',
    role: 'CTO',
    description: 'Full-stack разработчик с фокусом на Vue.js и Node.js. Архитектор высоконагруженных систем.',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
    socialLinks: {
      github: 'https://github.com/placeholder',
      linkedin: 'https://linkedin.com/in/placeholder'
    }
  },
  {
    id: 'member-3',
    name: 'Дмитрий Сидоров',
    role: 'Lead Developer',
    description: 'Специалист по AI-интеграциям и автоматизации бизнес-процессов.',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dmitry',
    socialLinks: {
      github: 'https://github.com/placeholder',
      telegram: 'https://t.me/placeholder'
    }
  },
  {
    id: 'member-4',
    name: 'Елена Козлова',
    role: 'UX/UI Designer',
    description: 'Создаёт интуитивные интерфейсы, которые конвертируют посетителей в клиентов.',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elena',
    socialLinks: {
      telegram: 'https://t.me/placeholder'
    }
  }
]
