<template>
  <label
    v-for="(type, idx) in categoryType"
    :key="type.label"
    class="category__option"
    :class="`category__option--${type.name}`"
    :for="`${type.name + idx}`"
  >
      <input
        type="checkbox"
        v-model="checkbox"
        :value="type.label"
        :name="`${type.name + idx}`"
        :id="`${type.name + idx}`"
      />
      <div class="category__label">
        <img v-if="type.oldPrice" :src="DiscountIcon" alt="Ícone de Desconto" width="24" height="24">
        {{ type.label }}
      </div>
      <div class="category__prices">
        <span class="category__price--old" v-if="type.oldPrice">de {{ priceString(type.oldPrice) }}</span>
        <span class="category__price" v-if="type.price">
          {{ !required ? '+' : ''}}
          {{ priceString(type.price) }}
        </span>
      </div>
    </label>
</template>

<script setup>
import { onUpdated, ref } from 'vue'
import DiscountIcon from '@/assets/imgs/discount-icon.png'
import { priceString } from '@/utils'
import { useCartStore } from '@/stores/cartStore'

// Props
const props = defineProps({
  categoryType: Array,
  required: Boolean
})

// Data
const checkbox = ref([])

// Store
const cart = useCartStore()

// Hooks
onUpdated(() => {
  props.categoryType.forEach((cat) => cart.removeItem({ ...cat }))
    
  checkbox.value.forEach((checked) => {
    const item = props.categoryType.find( cat => cat.label === checked)
    cart.updateItem({ ...item, qty: 1 })
  })
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

    img {
      margin: 0 .8rem 0 0;
    }
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