<template>
  <label
    :for="for"
    class="label"
    :class="`label__${inputType}`"
  >
    <span class="checkmark" :class="`checkmark__${inputType}`"></span>
    <div class="label__text">
      <img v-if="productOldPrice" :src="DiscountIcon" alt="Ícone de Desconto">
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
import DiscountIcon from '@/assets/imgs/discount-icon.png'

// Props
const props = defineProps({
  for: Number,
  productLabel: String,
  productPrice: Number,
  productOldPrice: Number,
  productQty: Number,
  productRequired: Boolean,
  inputType: {
    type: String,
    default: 'radio',
    validator(value) {
      // The value must match one of these strings
      return ['radio', 'checkbox', 'text', 'counter'].includes(value)
    }
  }
})

// Computed
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
  position: relative;
  display: flex;
  justify-content: space-between;
  color: var(--color-text-primary);
  flex: 1;
  align-items: center;
  padding-left: 2.2rem;
  line-height: 2.4rem;

  &__counter {
    cursor: auto;
  }

  &__text {
    font-size: 1.4rem;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    gap: .4rem;
  }

  &__prices {
    font-size: 1.2rem;
    font-weight: 700;
  }

  &__price {
    font-size: 1.4rem;
    color: var(--color-ui-primary);
    margin-left: .4rem;

    &--discount {
      color: var(--color-icon-discount);
    }
  }
}

.checkmark {
  position: absolute;
  top: .4rem;
  left: 0;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  border: 1px solid var(--color-text-primary);

  &::after {
    content: "";
    position: absolute;
    left: .5rem;
    top: .3rem;
    width: .3rem;
    height: .6rem;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &__counter {
    display: none;
  }

  &__checkbox {
    border-radius: .4rem;
  }
}
</style>