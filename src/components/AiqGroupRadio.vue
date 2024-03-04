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
function updateCartItem () {
  const sku = checked.value
  const product = props.products.find( product => product.sku === sku )
  let qty

  const mainProduct = cart.items.find(item => item.id === product.id)

  if (mainProduct) {
    qty = mainProduct.qty
  } else {
    qty = 1 
  }

  cart.updateItem( { ...product, qty })
}
</script>