<script setup lang="ts">
import CanvasParty from '@canvas-party/vue'

const options = {
  colors: ['#A3E635', '#6A9523'],
  count: 181,
}
</script>

<template>
  <CanvasParty class="canvas-party" type="confetti" :options="options" />
</template>

<style scoped>
.canvas-party {
  position: absolute;
  width: 100%;
  height: 100vh;
}
</style>
