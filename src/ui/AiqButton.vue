<template>
  <button class="btn">
    <slot />
  </button>
</template>

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
}
</style>