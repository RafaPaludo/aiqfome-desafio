<template>
  <TheContainer bgColor="#7B1FA2">
    <TheHeader />
  </TheContainer>

  <TheContainer bgColor="#EEF0F5">
    <TheFooter />
  </TheContainer>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheContainer from '@/components/TheContainer.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

#app {
  font-family: $font-default;
}
</style>
