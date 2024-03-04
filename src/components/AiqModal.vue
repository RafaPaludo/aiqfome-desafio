<template>
  <div
    v-if="modal.status && cart.total"
    class="modal"
  >
    <h3 class="modal__header">Ticket</h3>
    <ul>
      <li v-for="item in cart.items" :key="item.id" class="modal__item">
        {{ item.qty }}x {{ item.label }} - {{ priceString(item.price) }} 
      </li>
    </ul>

    <p class="modal__total">Total {{ priceString(cart.total) }}</p>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { useModalStore } from '@/stores/modalStore'
import { priceString } from '@/utils'

const cart = useCartStore()
const modal = useModalStore()
</script>

<style lang="scss">
.modal {
  padding: 5rem;
  border-radius: 0 0 4rem 4rem;
  color: var(--white);
  background-color: var(--color-ui-secondary);

  &__header {
    font-size: 2.4rem;
    color: var(--white);
    border-bottom: 1px solid #EEF0F5;
    margin-bottom: 1rem;
  }

  &__item {
    padding: .5rem 0;
  }

  &__total {
    font-size: 2rem;
    font-weight: 800;
  }

  ul {
    padding: 2rem;
  }
}

@media screen and (max-width: 1100px) {
  .modal {
    padding: 1rem;
    text-align: center;
  }
}
</style>