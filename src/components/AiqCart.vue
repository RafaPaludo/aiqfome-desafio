<template>
  <div v-if="cart.total">
    total: {{ priceString(cart.total) }}
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { priceString } from '@/utils'

// Stores
const cart = useCartStore()
</script>