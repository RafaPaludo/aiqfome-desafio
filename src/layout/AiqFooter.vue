<template>
  <footer class="footer">
    <p>feito com 💜 em maringá-PR</p>
    <p class="footer__info">aiqfome.com © 2007-{{ currentYear }} aiqfome LTDA . CNPJ: 09.186.786/0001-58</p>
  </footer>
</template>

<script setup>
// Data
const currentYear = new Date().getFullYear()
</script>

<style lang="scss">
.footer {
  text-align: center;
  padding: 3.2rem;
  color: var(--color-footer-text);
  font-weight: 700;
  font-size: 1.4rem;

  &__info {
    font-size: 1.8rem;
    margin-top: .8rem;
  }
}
</style>