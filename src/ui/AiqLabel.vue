<template>
  <label
    :for="for"
    class="label"
  >
    <div class="label__text">
      <span v-if="productOldPrice">
        $
      </span>
      <span>
        {{ productLabel }}
      </span>
    </div>
    
    <div class="label__prices">
      <span v-if="productOldPrice">
        de {{ priceString(productOldPrice) }} por
      </span>
      <span v-if="productPrice" class="label__price" :class="productOldPrice ? 'label__price--discount' : ''">
        <span v-if="!productRequired">+</span>
        {{ priceString(finalPrice) }}
      </span>
    </div>
  </label>
</template>

<script setup>
import { computed } from 'vue'
import { priceString } from '@/utils'

const props = defineProps({
  for: Number,
  productLabel: String,
  productPrice: Number,
  productOldPrice: Number,
  productQty: Number,
  productRequired: Boolean
})

const finalPrice = computed(() => {
  if (props.productQty > 1) {
    return props.productQty * props.productPrice
  } else {
    return props.productPrice
  }
})

</script>

<style lang="scss">
.label {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  color: #6D6F73;
  flex: 1;

  &__text {
    font-size: 1.4rem;
    color: #6D6F73;
  }

  &__prices {
    font-size: 1.2rem;
    font-weight: 700;
  }

  &__price {
    font-size: 1.4rem;
    color: #7B1FA2;
    margin-left: .4rem;

    &--discount {
      color: #02A117;
    }
  }
}
</style>