<script setup lang="ts">
import {
  AppHeader,
  HeroSection,
  SolutionsSection,
  ApproachSection,
  TeamSection,
  AppFooter
} from '@/widgets'
</script>

<template>
  <div class="home-page">
    <AppHeader />
    <main class="home-page__main">
      <HeroSection />
      <SolutionsSection />
      <ApproachSection />
      <TeamSection />
    </main>
    <AppFooter />
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
