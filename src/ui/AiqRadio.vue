<template>
  <input 
    type="radio"
    :id="id"
    :value="id"
    v-model="model"
  >
</template>

<script setup>
import { ref, watch, inject } from 'vue'


const model = defineModel()
const props = defineProps({
  id: Number
})
</script>
