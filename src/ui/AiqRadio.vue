<template>
  <input 
    type="radio"
    :id="id"
    :value="id"
    v-model="model"
  >
</template>

<script setup>
const model = defineModel()
// Props
const props = defineProps({
  id: Number
})
</script>
