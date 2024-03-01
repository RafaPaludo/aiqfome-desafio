<template>
  <TheContainer bgColor="#7B1FA2">
    <TheHeader />
  </TheContainer>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheContainer from '@/components/TheContainer.vue';
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

#app {
  font-family: $font-default;
}
</style>
