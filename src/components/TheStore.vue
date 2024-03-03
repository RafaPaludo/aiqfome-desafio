<template>
  <div class="store">
    <StoreInfo :store="store" />
    <TheStoreProduct :product="product" />

    <hr>

    <TheStoreCategory
      v-for="category in product.specs" :key="category.categoryId"
      :category="category" 
    />

    <TheStoreCategory
      v-for="category in categories" :key="category.categoryId"
      :category="category" 
    />
    <hr>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StoreInfo from "./TheStoreInfo.vue"
import TheStoreProduct from "./TheStoreProduct.vue"
import StoreLogo from '@/assets/imgs/store-logo.png'
import TheStoreCategory from "./TheStoreCategory.vue"

const store = ref({
  name: 'Matsuri Concept',
  image: StoreLogo
})

const product = ref({
  id: 0,
  name: 'Ceviche de salmão',
  price: 19.90,
  description: 'salmão temperado com limão, cebola e pimenta',
  specs: [
    {
      categoryId: 0,
      title: 'qual o tamanho?',
      subtitle: 'escolha 1',
      required: true,
      type: 'radio',
      options: [
        {
          id: 0,
          sku: 'ceviche-01',
          name: 'size',
          label: 'médio',
          price: 19.90,
          oldPrice: 22.90
        },
        {
          id: 0,
          sku: 'ceviche-02',
          name: 'size',
          label: 'grande',
          price: 28.90
        }
      ]
    },
  ]
})

const categories = ref([
  {
    categoryId: 1,
    title: 'vai querer bebida?',
    subtitle: 'escolha quantos quiser',
    required: false,
    type: 'counter',
    options: [
      {
        id: 1,
        name: 'beverage',
        label: 'coca-cola',
        price: 5
      },
      {
        id: 2,
        name: 'beverage',
        label: 'suco prats laranja',
        price: 6
      },
      {
        id: 3,
        name: 'beverage',
        label: 'água sem gás',
        price: 3
      },
    ]
  },
  {
    categoryId: 2,
    title: 'precisa de talher?',
    subtitle: 'escolha até 1',
    required: false,
    type: 'radio',
    options: [
      {
        id: 4,
        name: 'cutlery',
        label: 'hashi',
        price: 0
      },
      {
        id: 4,
        name: 'cutlery',
        label: 'garfo e faca descartável',
        price: 1
      },
    ]
  },
  {
    categoryId: 3,
    title: 'mais alguma coisa?',
    subtitle: 'escolha até 2',
    required: false,
    type: 'checkbox',
    options: [
      {
        id: 5,
        name: 'other',
        label: 'biscoito da sorte',
        price: 2
      },
      {
        id: 6,
        name: 'other',
        label: 'rolinho primavera',
        price: 8
      },
    ]
  }
])
</script>

<style lang="scss">
</style>