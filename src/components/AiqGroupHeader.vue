<template>
  <div class="group__header">
    <div class="group__text">
      <h2 class="group__title">{{ label.title }}</h2>
      <h3 class="group__subtitle">{{ label.subtitle }}</h3>
    </div>

    <div
      v-if="label.required"
      class="badge"
    >obrigatório</div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  label: Object
})
</script>

<style lang="scss">
.group__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
}

.group__title {
  font-size: 1.6rem;
  color: var(--color-text-emphasis);
}

.group__subtitle {
  font-size: 1.2rem;
  color: var(--color-text-primary);
}

.badge {
  cursor: default;
  background-color: var(--color-text-secundary);
  color: var(--white);
  padding: .6rem .8rem;
  border-radius: .4rem;
  font-weight: 700;
  font-size: 1.2rem;
  align-self: center;
}
</style>