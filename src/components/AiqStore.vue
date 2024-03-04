<template>
  <div class="store">
    <AiqStoreInfo :store="store" />

    <AiqProduct :product="product" />
    
    <div v-for="(value, key) in complementary">
      <!-- Counter -->
      <div
        class="group"
        v-if="value.type === 'counter'"
      >
        <AiqGroupHeader :label="value.label" />
        <div class="group__content">
          <AiqGroupCounter
            v-for="product in value.products"
            :product="product"
            :key="product.sku"
          />
        </div>
      </div>

      <!-- Radio -->
      <AiqGroupRadio v-if="value.type === 'radio'" :products="value.products" :label="value.label" />

      <!-- Checkbox -->
      <div 
        class="group"
        v-if="value.type === 'checkbox'"
      >
        <AiqGroupHeader :label="value.label" />
        <div class="group__content">
          <AiqGroupCheckbox
            v-for="product in value.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>

    <AiqTextArea />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AiqTextArea from '@/ui/AiqTextArea.vue'
import StoreLogo from '@/assets/imgs/store-logo.png'
import AiqStoreInfo from "@/components/AiqStoreInfo.vue"
import AiqProduct from "@/components/AiqProduct.vue"
import AiqGroupCheckbox from "@/components/AiqGroupCheckbox.vue"
import AiqGroupRadio from "@/components/AiqGroupRadio.vue"
import AiqGroupCounter from "@/components/AiqGroupCounter.vue"
import AiqGroupHeader from '@/components/AiqGroupHeader.vue'

const checkbox = {
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

const radio = {
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
}

const counter = {
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
}

const complementary = ref({
  counter,
  radio,
  checkbox,
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
        background-color: var(--color-icon);
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