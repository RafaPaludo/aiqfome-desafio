<template>
  <header class="header">
    <div class="infos">
      <div class="logo">
        <img :src="AiqLogo" alt="Aiqfome" class="logo__img">
      </div>
  
      <div class="address">
        <img :src="Location" alt="Ícone de localização">
        <div class="address__text">
          entregando em
          <span>Rua Mandaguar, 198 ></span>
        </div>
      </div>
    </div>

    <label for="" class="search-label">
      <input type="text" placeholder="busque pela loja ou culinária" class="search-bar">
    </label>

    <TheButton>
      <img :src="User" alt="Ícone de Usuário">
      entrar
    </TheButton>
  </header>
</template>

<script setup>
import AiqLogo from '@/assets/imgs/aiq-logo.png'
import Location from '@/assets/imgs/location-icon.png'
import User from '@/assets/imgs/user-icon.png'
import TheButton from './TheButton.vue'
</script>

<style lang="scss">
.header {
  background-color: var(--color-primary);
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
}

.infos {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.logo {
  height: 4rem;
}

.address {
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: var(--white);
    font-size: 1.8rem;
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
  }
}

.search-bar {
  padding: .8rem .8rem .8rem 4.4rem;
  border-radius: .8rem;
  border: 1px solid #CDD1D9;
  background-color: var(--white);
  color: #6D6F73;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.9rem;
  min-width: 42rem;
  background-image: url('@/assets/imgs/search-icon.png');
  background-repeat: no-repeat;
  background-position: 1.2rem 50%;
}

.btn {
  cursor: pointer;
  border-radius: .8rem;
  padding: .6rem 1.6rem;
  background-color: #00A296;
  border: none;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>