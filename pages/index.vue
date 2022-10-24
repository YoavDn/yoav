<script setup lang="ts">
import Hero from '~~/components/Hero.vue'
import Content from '~~/components/Content.vue'
import FeatureProjects from '~~/components/FeatureProjects.vue'
import { onMounted } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

onMounted(() => {
  const preferredMotion = usePreferredReducedMotion(window)
})
</script>

<template>
  <div>
    <Hero />

    <Content />

    <FeatureProjects />
  </div>
</template>

<style></style>
