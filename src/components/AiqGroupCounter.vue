<template>
  <div class="group__input">
    <AiqCounter v-model="counter" />
    <AiqLabel
      :productLabel="product.label"
      :productPrice="product.price"
      :productOldPrice="product.oldPrice"
      :productQty="counter"
      inputType="counter"  
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import AiqLabel from "@/ui/AiqLabel.vue"
import AiqCounter from "@/ui/AiqCounter.vue"

const props = defineProps({
  product: Object
})

// Data
const counter = ref(0)

// Stores
const cart = useCartStore()

// Watcher
watch(
  counter,
  updateCartItem,
  { deep: true }
)

// Function
function updateCartItem () {
  const qty = counter.value

  if (!qty) {
    cart.removeItem({ ...props.product })
  } else {
    cart.updateItem({ ...props.product, qty })
  }
}
</script>