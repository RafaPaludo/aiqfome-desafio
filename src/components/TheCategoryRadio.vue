<template>
  <label
    v-for="type in categoryType"
    :key="type"
    class="category__option"
    :class="`category__option--${type.name}`"
  >
    <input
      type="radio"
      v-model="radio"
      :value="type"
      :name="type.name"
    />
    <div class="category__label">
      <img v-if="type.oldPrice" :src="DiscountIcon" alt="Ícone de Desconto" width="24" height="24">
      {{ type.label }}
    </div>
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
import DiscountIcon from '@/assets/imgs/discount-icon.png'
import { priceString } from '@/utils'
import { ref, onUpdated } from 'vue';
import { useCartStore } from '@/stores/cartStore'

// Props
const props = defineProps({
  categoryType: Array,
  required: Boolean
})

// Data
const radio = ref(null)

// Store
const cart = useCartStore()

// Hooks
onUpdated(() => {
  const product = radio.value
  const { id, price, name } = product

  cart.updateItem({ id, price, name })
  // console.log(radio.value)
  console.log(cart.items)
})
</script>

<style lang="scss">
.category {
  &__option {
    cursor: pointer;
    display: flex;
    gap: .8rem;
    flex-wrap: wrap;
    align-items: center;
  }

  &__label {
    display: flex;
    align-items: center;
  }

  &__price {
    color: #7B1FA2;
    font-size: 1.4rem;
    font-weight: 700;
  }

  &__prices {
    margin-left: auto;
  }

  &__price--old {
    color: #6D6F73;
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: .4rem;
  }
}
</style>