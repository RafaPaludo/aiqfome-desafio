<template>
  <div class="group__input">
    <AiqCheckbox v-model="checked" :id="product.sku" />
    <AiqLabel :for="product.sku"  :productLabel="product.label" :productPrice="product.price"  :productOldPrice="product.oldPrice" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import AiqCheckbox from "@/ui/AiqCheckbox.vue"
import AiqLabel from "@/ui/AiqLabel.vue"
import { useCartStore } from '@/stores/cartStore'

// Props
const props = defineProps({
  product: Object,
})

// Data
const checked = ref(false)

// Store
const cart = useCartStore()

// Watchers
watch(
  checked,
  updateCartItem,
  { deep: true }
)

// Functions
function updateCartItem () {
  if (checked.value) {
    cart.updateItem({ ...props.product, qty:1 })
  } else {
    cart.removeItem({ ...props.product })
  }
}
</script>

<style lang="scss">

</style>