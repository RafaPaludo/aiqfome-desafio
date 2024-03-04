<template>
  <button class="btn" :class="`btn--${variant}`">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: '',
    validator(value) {
      // The value must match one of these strings
      return ['add', 'login', 'ticket'].includes(value)
    }
  }
})
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  border-radius: .8rem;
  padding: .6rem 1.6rem;
  border: none;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;

  &--add {
    background-color: #6D6F73;
    padding: 1.1rem 2.4rem;
  }

  &--login {
    background-color: #00A296;
  }

  &--ticket {
    background-color: #F8ECFE;
    color: #7B1FA2;
  }
}
</style>