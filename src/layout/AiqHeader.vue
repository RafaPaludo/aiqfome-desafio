<template>
  <header class="header">
    <div class="infos">
      <div class="logo">
        <img :src="AiqLogo" alt="Aiqfome" class="logo__img">
      </div>
  
      <div class="address mobile-hidden">
        <img :src="Location" alt="Ícone de localização" class="address__icon">
        <div class="address__text">
          entregando em
          <span>
            Rua Mandaguar, 198
            <img :src="Arrow" alt=">" width="16" height="17"/>
          </span>
        </div>
      </div>
    </div>

    <label class="search-label">
      <input type="text" placeholder="busque pela loja ou culinária" class="search-bar">
    </label>
    
    <div class="actions">
      <AiqButton 
        v-if="cart.total"
        variant="ticket"
        @click="modal.toggle"
      >
        <img :src="Ticket" alt="Ver ticket">
        ver ticket
      </AiqButton>

      <AiqButton variant="login">
        <img :src="User" alt="Ícone de Usuário">
        entrar
      </AiqButton>
    </div>

  </header>
</template>

<script setup>
import AiqLogo from '@/assets/imgs/aiq-logo.png'
import Location from '@/assets/imgs/location-icon.png'
import User from '@/assets/imgs/user-icon.png'
import Ticket from '@/assets/imgs/ticket-icon.png'
import Arrow from '@/assets/imgs/arrow-icon.png'
import AiqButton from '@/ui/AiqButton.vue'
import { useCartStore } from '@/stores/cartStore'
import { useModalStore } from '@/stores/modalStore'

// Stores
const cart = useCartStore()
const modal = useModalStore()
</script>

<style lang="scss">

.header {
  background-color: var(--color-ui-primary);
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.4rem;
}

.infos {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-right: 8rem;
}

.logo {
  height: 4rem;
}

.address {
  color: var(--color-ui-secondary);
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: var(--white);
    font-size: 1.8rem;
    display: inline-flex;
    align-items: center;
    gap: .4rem;
  }

  &__icon {
    width: 2.4rem;
    height: 2.4rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
  }
}

.search-label {
  margin-right: auto;
}

.search-bar {
  padding: .8rem .8rem .8rem 4.4rem;
  border-radius: .8rem;
  border: 1px solid #CDD1D9;
  background-color: var(--white);
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.9rem;
  min-width: 42rem;
  background-image: url('@/assets/imgs/search-icon.png');
  background-repeat: no-repeat;
  background-position: 1.2rem 50%;
}

.actions {
  display: flex;
  gap: 2rem;
}

@media screen and (max-width: 1100px) {
  .header {
    justify-content: center;
  }

  .search-label,
  .infos {
    margin: auto;
  }

  .search-bar {
    min-width: 28rem;
  }
}
</style>