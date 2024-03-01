<template>
  <div 
    class="container"
    :style=" { backgroundColor: bgColor } "
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  bgColor: String,
  default: '#FFF'
})

</script>

<style lang="scss">
.container {
  & > *{
    max-width: 144rem;
    margin: 0 auto;
  }
}
</style>