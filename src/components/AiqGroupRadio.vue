<template>
  <div class="group">
    <AiqGroupHeader :label="label" />

    <div class="group__content">
      <div 
        v-for="product in products"
        :key="product.sku"
        class="group__input"
      >
        <AiqRadio :id="product.sku" v-model="checked" />
        <AiqLabel
          :for="product.sku"
          :productLabel="product.label"
          :productPrice="product.price"
          :productOldPrice="product.oldPrice"
          :productRequired="label.required"
          inputType="radio"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import AiqRadio from "@/ui/AiqRadio.vue"
import AiqLabel from "@/ui/AiqLabel.vue"
import AiqGroupHeader from '@/components/AiqGroupHeader.vue'

// Props
const props = defineProps({
  products: Object,
  label: Object
})

// Data
const checked = ref(null)

// Store
const cart = useCartStore()

// Watcher
watch(
  checked,
  updateCartItem,
  { deep: true }
)

// Function
/**
 * Adds or removes product from the cart based on the radio value.
 * If the main product is in the cart, updates its quantity too.
 */
function updateCartItem () {
  const sku = checked.value
  let product, isMainProduct, qty
  
  if (!sku) {
    return
  }

  product = props.products.find( product => product.sku === sku )
  isMainProduct = cart.items.find(item => item.id === product.id)
  isMainProduct ? qty = isMainProduct.qty : qty = 1 

  cart.updateItem( { ...product, qty })
}

// Expose checked ref to use in the parent component
defineExpose({ checked })
</script>