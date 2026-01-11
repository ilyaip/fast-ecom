import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [
  {
    id: 'marketplace',
    title: 'Маркетплейс электроники',
    client: 'TechStore',
    industry: 'E-commerce',
    description: 'Создание высоконагруженного маркетплейса с AI-рекомендациями и автоматизацией складского учёта.',
    challenge: 'Клиент столкнулся с проблемой масштабирования существующей платформы и низкой конверсией из-за неудобного поиска товаров.',
    solution: 'Разработали новую архитектуру на микросервисах с AI-системой персональных рекомендаций и умным поиском.',
    results: [
      { metric: 'Конверсия', value: '+45%', description: 'Рост конверсии за 3 месяца' },
      { metric: 'Скорость', value: '0.8с', description: 'Время загрузки страницы' },
      { metric: 'Нагрузка', value: '10K', description: 'Одновременных пользователей' }
    ],
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'AI/ML'],
    icon: 'cart',
    colorScheme: 'blue'
  },
  {
    id: 'ai-assistant',
    title: 'AI-ассистент для поддержки',
    client: 'ServiceHub',
    industry: 'SaaS',
    description: 'Интеллектуальный чат-бот для автоматизации клиентской поддержки с интеграцией в CRM.',
    challenge: 'Команда поддержки не справлялась с потоком обращений, время ответа превышало 24 часа.',
    solution: 'Внедрили AI-агента на базе LLM с обучением на базе знаний компании и автоматической маршрутизацией сложных запросов.',
    results: [
      { metric: 'Автоматизация', value: '70%', description: 'Запросов решаются без оператора' },
      { metric: 'Время ответа', value: '<1мин', description: 'Среднее время первого ответа' },
      { metric: 'Экономия', value: '₽2M', description: 'Ежемесячная экономия на поддержке' }
    ],
    technologies: ['Python', 'OpenAI', 'LangChain', 'PostgreSQL', 'Docker'],
    icon: 'bot',
    colorScheme: 'purple'
  },
  {
    id: 'analytics',
    title: 'Аналитическая платформа',
    client: 'DataDriven',
    industry: 'Финтех',
    description: 'Real-time дашборд для анализа финансовых данных с предиктивной аналитикой.',
    challenge: 'Отсутствие единой системы аналитики, данные разбросаны по разным источникам, отчёты готовились вручную.',
    solution: 'Создали централизованную платформу с автоматическим сбором данных, визуализацией и ML-моделями для прогнозирования.',
    results: [
      { metric: 'Время отчётов', value: '-90%', description: 'Сокращение времени подготовки' },
      { metric: 'Точность', value: '94%', description: 'Точность прогнозов' },
      { metric: 'ROI', value: '300%', description: 'Возврат инвестиций за год' }
    ],
    technologies: ['React', 'Python', 'ClickHouse', 'Apache Kafka', 'TensorFlow'],
    icon: 'chart',
    colorScheme: 'green'
  },
  {
    id: 'automation',
    title: 'Автоматизация бизнес-процессов',
    client: 'LogiPro',
    industry: 'Логистика',
    description: 'Комплексная система управления логистикой с оптимизацией маршрутов и трекингом.',
    challenge: 'Ручное планирование маршрутов, потери на топливе и времени, отсутствие прозрачности для клиентов.',
    solution: 'Разработали платформу с AI-оптимизацией маршрутов, real-time трекингом и автоматическими уведомлениями.',
    results: [
      { metric: 'Топливо', value: '-25%', description: 'Экономия на топливе' },
      { metric: 'Доставки', value: '+35%', description: 'Больше доставок в день' },
      { metric: 'NPS', value: '78', description: 'Индекс лояльности клиентов' }
    ],
    technologies: ['Vue.js', 'Go', 'MongoDB', 'Google Maps API', 'Docker'],
    icon: 'rocket',
    colorScheme: 'orange'
  }
]
