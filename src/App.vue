<template>
  <AiqContainer bgColor="#7B1FA2">
    <AiqHeader />
  </AiqContainer>

  <AiqContainer bgColor="#7B1FA2">
    <AiqModal />
  </AiqContainer>

  <AiqContainer>
    <AiqStore/>
  </AiqContainer>

  <AiqContainer bgColor="#EEF0F5">
    <AiqFooter />
  </AiqContainer>
</template>

<script setup>
import AiqHeader from '@/layout/AiqHeader.vue'
import AiqModal from '@/components/AiqModal.vue'
import AiqFooter from '@/layout/AiqFooter.vue';
import AiqContainer from '@/ui/AiqContainer.vue';
import AiqStore from './components/AiqStore.vue';
</script>

<style lang="scss">
</style>
