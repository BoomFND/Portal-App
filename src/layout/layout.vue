<script setup>
import GamerFooter from './gamer-footer.vue'
import GamerHeader from './gamer-header.vue'
</script>

<template>
  <div class="layout">
    <GamerHeader></GamerHeader>
    <main><slot></slot></main>
    <GamerFooter></GamerFooter>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
}
</style>
