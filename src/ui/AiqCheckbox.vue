<template>
  <input
    type="checkbox"
    :id="id"
    v-model="model"
  />
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  id: Number
})
</script>