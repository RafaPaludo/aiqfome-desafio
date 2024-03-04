<template>
  <div 
    class="container"
    :style=" { backgroundColor: bgColor } "
  >
    <slot />
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  bgColor: String
})

</script>

<style lang="scss">
.container {
  padding: 0 2rem;
  & > *{
    max-width: 144rem;
    margin: 0 auto;
  }
}
</style>