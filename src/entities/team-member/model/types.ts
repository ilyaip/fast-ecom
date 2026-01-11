export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  photo: string
  socialLinks?: {
    telegram?: string
    linkedin?: string
    github?: string
  }
}
