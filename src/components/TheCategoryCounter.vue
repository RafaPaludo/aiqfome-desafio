<template>
  <label
    v-for="type in categoryType"
    :key="type"
    class="category__option category__option--counter"
    :class="`category__option--${type.name}`"
    ref="counter"
  >
    <!-- Counter -->
    <TheCounter
      @addToCart="addToCart"
      @removeToCart="removeToCart"
    />
    
    <!-- Label -->
    <div class="category__label">
      <img v-if="type.oldPrice" :src="DiscountIcon" alt="Ícone de Desconto" width="24" height="24">
      {{ type.label }}
    </div>

    <!-- Price -->
    <div class="category__prices">
      <span class="category__price--old" v-if="type.oldPrice">de {{ priceString(type.oldPrice) }} por</span>
      <span class="category__price" v-if="type.price">
        {{ !required ? '+' : ''}}
        {{ priceString(type.price) }}
      </span>
    </div>
  </label>
</template>

<script setup>
import { ref } from 'vue'
import { priceString } from '@/utils'
import { useCartStore } from '@/stores/cartStore'
import DiscountIcon from '@/assets/imgs/discount-icon.png'
import TheCounter from './TheCounter.vue'

// Props
const props = defineProps({
  categoryType: Array,
  required: Boolean
})

// Data
const counter = ref(0)

// Stores
const cart = useCartStore()

// Functions
function addToCart (qty) {
  console.log(counter, qty)
  // cart.updateItem({ ...props.product, qty })
}

function removeToCart (qty) {
  // cart.updateItem({ ...props.product, qty })

  // if(qty === 0) {
  //   cart.removeItem({ ...props.product })

  // }
}
</script>

<style lang="scss">
.category {
  &__option {
    display: flex;
    gap: .8rem;
    flex-wrap: wrap;
    align-items: center;

    &--counter {
      cursor: auto;
      pointer-events: none;
    }
  }

  &__label {
    display: flex;
    align-items: center;
  }

  &__prices {
    margin-left: auto;
  }

  &__price {
    color: #7B1FA2;
    font-size: 1.4rem;
    font-weight: 700;
  }

  &__price--old {
    color: #6D6F73;
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: .4rem;
  }
}
</style>