<template>
  <div class="counter"  :class="size">
    <button
      class="counter__remove"
      :class="[ disabledClass, variantTrash ]"
      @click="remove"
    >-</button>

    <input
      class="counter__number"
      type="number"
      min="0"
      v-model="counter"
      disabled
    >

    <button 
      class="counter__add" 
      @click="add"
    >+</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

// Props
const props = defineProps({
  counterValue: Number,
  default: 0,
  required: true,
  variant: String,
  size: String
})

// Data
const counter = ref(props.counterValue || 0)

// Computed
const disabledClass = computed(() => counter.value ? '' : 'counter__remove--disabled')
const variantTrash = computed(() => counter.value === 1 && props.variant === 'trash' ? 'counter__remove--trash' : '')

// Emits
const emit = defineEmits(['addToCart', 'removeToCart'])

// Functions
function add () {
  counter.value++
  emit('addToCart', counter.value)
}

function remove () {
  if (counter.value) {
    counter.value--
    emit('removeToCart', counter.value)
  }
}
</script>

<style lang="scss">
.counter {
  pointer-events: all;
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;

  &__add,
  &__remove {
    cursor: pointer;
    color: #00A296;
    border-radius: 50%;
    border: 1px solid #00A296;
    background-color: transparent;
    width: 2.4rem;
    height: 2.4rem;
    text-align: center;

    .large & {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  &__remove {
    &--trash {
      border: none;
      font-size: 0;
      background-image: url('@/assets/imgs/trash.png');
    }
  }

  &__remove--disabled {
    cursor: auto;
    background-color: #EEF0F5;
    border-color: #EEF0F5;
    color: #A8ADB7;
  }

  &__number {
    cursor: auto;
    background-color: transparent;
    border: none;
    height: 100%;
    color: #393A3C;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    width: 3.2rem;

    .large & {
      font-size: 1.6rem;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>