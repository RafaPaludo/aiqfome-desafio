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
  display: flex;
  padding: .6rem 1.6rem;
  align-items: center;
  gap: .8rem;
  border: none;
  border-radius: .8rem;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 700;

  &--add {
    background-color: var(--color-button-add);
    padding: 1.1rem 2.4rem;
  }

  &--login {
    background-color: var(--color-button-login);
  }

  &--ticket {
    background-color: var( --color-button-ticket);
    color: var(--color-ui-primary);
  }
}
</style>