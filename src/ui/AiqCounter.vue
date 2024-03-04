<template>
  <div class="counter" :class="size">
    <button
      class="counter__remove"
      :class="[ disabledClass, variantTrash ]"
      @click="remove"
    >-</button>

    <input
      class="counter__number"
      type="number"
      min="0"
      v-model="model"
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

const model = defineModel()

// Props
const props = defineProps({
  variant: String,
  size: String
})

// Computed
const disabledClass = computed(() => model.value ? '' : 'counter__remove--disabled')
const variantTrash = computed(() => model.value === 1 && props.variant === 'trash' ? 'counter__remove--trash' : '')

// Functions
function add () {
  model.value++
}

function remove () {
  if (model.value) {
    model.value--
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
    color: var(--color-icon);
    border-radius: 50%;
    border: 1px solid var(--color-icon);
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
    background-color: var(--color-button-disabled);
    border-color: var(--color-button-disabled);
    color: var(--color-button-text);
  }

  &__number {
    cursor: auto;
    background-color: transparent;
    border: none;
    height: 100%;
    color: var(--color-darker-gray);
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