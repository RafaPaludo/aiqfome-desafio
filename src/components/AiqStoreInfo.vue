<template>
  <div class="store__info">
    <img :src="store.image" alt="Matsuri Concept">
    <h2>{{ store.name }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  store: Object
})
</script>

<style lang="scss">
.store__info {
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-text-emphasis);
  display: flex;
  gap: .8rem;
  align-items: center;
}
</style>