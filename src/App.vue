<template>
  <AiqContainer bgColor="#7B1FA2">
    <AiqHeader />
  </AiqContainer>

  <AiqContainer bgColor="#7B1FA2">
    <AiqModal />
  </AiqContainer>

  <AiqContainer>
    <AiqStore 
      :data="data"
    />
  </AiqContainer>

  <AiqContainer bgColor="#EEF0F5">
    <AiqFooter />
  </AiqContainer>
</template>

<script setup>
import { ref } from 'vue'
import AiqHeader from '@/layout/AiqHeader.vue'
import AiqFooter from '@/layout/AiqFooter.vue';
import AiqModal from '@/components/AiqModal.vue'
import AiqStore from './components/AiqStore.vue';
import AiqContainer from '@/ui/AiqContainer.vue';

import StoreLogo from '@/assets/imgs/store-logo.png'

const data = ref({
  store: {
    name: 'Matsuri Concept',
    image: StoreLogo
  },
  mainProduct: {
    id: 70,
    name: 'Ceviche de salmão',
    price: 19.90,
    description: 'salmão temperado com limão, cebola e pimenta',
    specs: {
      products: [
        {
          id: 70,
          sku: 701,
          name: 'size',
          label: 'médio',
          price: 19.90,
          oldPrice: 22.90
        },
        {
          id: 70,
          sku: 702,
          name: 'size',
          label: 'grande',
          price: 28.90
        }
      ],
      label: {
        title: 'qual o tamanho?',
        subtitle: 'escolha 1',
        required: true,
      }
    }
  },
  complementary: {
    counter: {
      type: 'counter',
      products: [
        {
          id: 40,
          sku: 401,
          name: 'beverage',
          label: 'coca-cola',
          price: 5
        },
        {
          id: 50,
          sku: 501,
          name: 'beverage',
          label: 'suco prats laranja',
          price: 6
        },
        {
          id: 60,
          sku: 601,
          name: 'beverage',
          label: 'água sem gás',
          price: 3
        },
      ],
      label: {
        title: 'vai querer bebida?',
        subtitle: 'escolha quantos quiser',
        required: false,
      }
    },
    radio: {
      type: 'radio',
      products: [
        {
          id: 30,
          sku: 301,
          name: 'cutlery',
          label: 'hashi',
          price: 0
        },
        {
          id: 30,
          sku: 302,
          name: 'cutlery',
          label: 'garfo e faca descartável',
          price: 1
        },
      ],
      label: {
        title: 'precisa de talher?',
        subtitle: 'escolha até 1',
        required: false,
      }
    },
    checkbox: {
      type: 'checkbox',
      products: [
        {
          id: 10,
          sku: 101,
          label: 'biscoito da sorte',
          price: 2
        },
        {
          id: 20,
          sku: 201,
          label: 'rolinho primavera',
          price: 8
        },
      ],
      label: {
        title: 'mais alguma coisa?',
        subtitle: 'escolha até 2',
        required: false,
      }
    }
  }
})
</script>

<style lang="scss">
</style>
