<template>
  <input
    type="checkbox"
    :id="id"
    v-model="model"
  />
</template>

<script setup>
// V-model
const model = defineModel()
// Props
const props = defineProps({
  id: Number
})
</script>