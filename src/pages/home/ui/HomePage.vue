<script setup lang="ts">
import {
  AppHeader,
  HeroSection,
  SolutionsSection,
  ApproachSection,
  CasesSection,
  TeamSection,
  AppFooter
} from '@/widgets'
import { ScrollToTop } from '@/shared/ui'
</script>

<template>
  <div class="home-page">
    <AppHeader />
    <main class="home-page__main">
      <HeroSection />
      <SolutionsSection />
      <ApproachSection />
      <CasesSection />
      <TeamSection />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.home-page__main {
  flex: 1;
}
</style>
