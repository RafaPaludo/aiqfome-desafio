<template>
  <div v-if="cart.total" class="total">
    total <span class="total__price">{{ priceString(cart.total) }}</span>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { priceString } from '@/utils'

// Stores
const cart = useCartStore()
</script>

<style lang="scss">
.total {
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 600;

  &__price {
    font-weight: 700;
    color: var(--color-text-secundary);
  }
}
</style>