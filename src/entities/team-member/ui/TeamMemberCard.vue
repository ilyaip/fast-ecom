<script setup lang="ts">
import { ref } from 'vue'
import type { TeamMember } from '../model/types'

interface Props {
  member: TeamMember
}

defineProps<Props>()

const cardRef = ref<HTMLElement | null>(null)
const transform = ref('')
const glowPosition = ref({ x: 50, y: 50 })
const isHovered = ref(false)
const imageError = ref(false)

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return

  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10

  transform.value = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  glowPosition.value = {
    x: (x / rect.width) * 100,
    y: (y / rect.height) * 100
  }
}

function handleMouseEnter() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
  transform.value = ''
}

function handleImageError() {
  imageError.value = true
}
</script>

<template>
  <div
    ref="cardRef"
    class="team-card"
    :class="{ 'team-card--hovered': isHovered }"
    :style="{ transform }"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="team-card__glow"
      :style="{
        background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(59, 130, 246, 0.3), transparent 50%)`
      }"
    />
    <div class="team-card__content">
      <div class="team-card__photo-wrapper">
        <img
          v-if="!imageError"
          :src="member.photo"
          :alt="member.name"
          class="team-card__photo"
          @error="handleImageError"
        />
        <div v-else class="team-card__photo-placeholder">
          {{ member.name.charAt(0) }}
        </div>
      </div>
      <h3 class="team-card__name">{{ member.name }}</h3>
      <p class="team-card__role">{{ member.role }}</p>
      <p class="team-card__description">{{ member.description }}</p>
      <div v-if="member.socialLinks" class="team-card__socials">
        <a
          v-if="member.socialLinks.telegram"
          :href="member.socialLinks.telegram"
          target="_blank"
          rel="noopener noreferrer"
          class="team-card__social-link"
          aria-label="Telegram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
        </a>
        <a
          v-if="member.socialLinks.linkedin"
          :href="member.socialLinks.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="team-card__social-link"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        </a>
        <a
          v-if="member.socialLinks.github"
          :href="member.socialLinks.github"
          target="_blank"
          rel="noopener noreferrer"
          class="team-card__social-link"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  position: relative;
  border-radius: 1rem;
  background: var(--color-bg-white);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: box-shadow var(--transition-base);
  overflow: hidden;
  transform-style: preserve-3d;
  will-change: transform;
}

.team-card--hovered {
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.team-card__glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity var(--transition-base);
  pointer-events: none;
}

.team-card--hovered .team-card__glow {
  opacity: 1;
}

.team-card__content {
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.team-card__photo-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 4px solid var(--color-primary);
  transition: border-color var(--transition-base), transform var(--transition-base);
}

.team-card--hovered .team-card__photo-wrapper {
  border-color: var(--color-secondary);
  transform: scale(1.05);
}

.team-card__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card__photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  font-size: 3rem;
  font-weight: 600;
}

.team-card__name {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
}

.team-card__role {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.team-card__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.team-card__socials {
  display: flex;
  gap: 0.75rem;
}

.team-card__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-bg-light);
  color: var(--color-text-secondary);
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}

.team-card__social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .team-card__content {
    padding: 1.5rem;
  }

  .team-card__photo-wrapper {
    width: 100px;
    height: 100px;
  }

  .team-card__name {
    font-size: var(--font-size-lg);
  }
}

/* Small mobile (320px - 479px) */
@media (max-width: 479px) {
  .team-card__content {
    padding: 1.25rem;
  }

  .team-card__photo-wrapper {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    border-width: 3px;
  }

  .team-card__photo-placeholder {
    font-size: 2rem;
  }

  .team-card__name {
    font-size: var(--font-size-base);
  }

  .team-card__role {
    font-size: var(--font-size-xs);
    margin-bottom: 0.75rem;
  }

  .team-card__description {
    font-size: var(--font-size-xs);
    margin-bottom: 1rem;
  }

  .team-card__socials {
    gap: 0.5rem;
  }

  .team-card__social-link {
    width: 32px;
    height: 32px;
  }

  .team-card__social-link svg {
    width: 16px;
    height: 16px;
  }
}

/* Disable 3D tilt effect on touch devices */
@media (hover: none) {
  .team-card {
    transform: none !important;
  }

  .team-card__glow {
    display: none;
  }

  .team-card:active {
    transform: scale(0.98) !important;
  }
}
</style>
