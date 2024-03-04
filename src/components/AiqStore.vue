<template>
  <div class="store">
    <AiqStoreInfo :store="store" />

    <AiqProduct :product="product" />

    <!-- Counter -->
    <div class="group">
      <AiqGroupHeader :label="counterLabel" />
      <div class="group__content">
        <AiqGroupCounter
          v-for="product in counterProducts"
          :product="product"
          :key="product.sku"
        />
      </div>
    </div>

    <!-- Radio -->
    <AiqGroupRadio :products="radioProducts" :label="radioLabel" />

    <!-- Checkbox -->
    <div class="group">
      <AiqGroupHeader :label="checkboxLabel" />
      <div class="group__content">
        <AiqGroupCheckbox
          v-for="product in checkboxProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>

    <AiqTextArea />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AiqStoreInfo from "./AiqStoreInfo.vue"
import AiqProduct from "./AiqProduct.vue"
import AiqGroupCheckbox from "./AiqGroupCheckbox.vue"
import AiqGroupRadio from "./AiqGroupRadio.vue"
import AiqGroupCounter from "./AiqGroupCounter.vue"
import StoreLogo from '@/assets/imgs/store-logo.png'
import AiqGroupHeader from './AiqGroupHeader.vue'
import AiqTextArea from '@/ui/AiqTextArea.vue'

const checkboxProducts = ref([
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
])
const checkboxLabel = ref({
  title: 'mais alguma coisa?',
  subtitle: 'escolha até 2',
  required: false,
})

const radioProducts = ref([
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
])

const radioLabel = ref({
  title: 'precisa de talher?',
  subtitle: 'escolha até 1',
  required: false,
})

const counterProducts = ref([
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
])

const counterLabel = ref({
  title: 'vai querer bebida?',
  subtitle: 'escolha quantos quiser',
  required: false,
})

const store = ref({
  name: 'Matsuri Concept',
  image: StoreLogo
})

const product = ref({
  id: 70,
  name: 'Ceviche de salmão',
  price: 19.90,
  description: 'salmão temperado com limão, cebola e pimenta'
})
</script>

<style lang="scss">
.store {
  padding: 2.4rem 0;
}

.group {
  padding: 2.4rem;
  border-bottom: .4rem solid #EEF0F5;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 7.5rem;
    row-gap: 3.5rem;
  }

  &__input {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    gap: .8rem;
    align-items: center;

    input {
      &[type="radio"],
      &[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }

      &:checked + label .checkmark {
        border: none;
        background-color: #00A296;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .group {
    padding-left: 0;
    padding-right: 0;
    
    &__content {
      grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    }
  }
}
</style>