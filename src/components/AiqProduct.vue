<template>
  <div class="store__item">
    <div class="store__description">
      <div class="store__header">
        <h3>{{ product.name }}</h3>
        <p class="price">a partir de <span>{{ priceString(product.price) }}</span></p>
        <p>{{ product.description }}</p>
      </div>

      <div class="store__quantity">
        <div class="store__quantity--total">
          <p>quantos?</p>
          <AiqCart />
        </div>
        <div class="store__quantity--actions">
          <AiqButton
            class="btn--add"
            @click="addProduct"
            v-if="!prductAdd"
          >
            Adicionar
          </AiqButton>
          <AiqCounter
            v-else
            v-model="productQty"
            size="large"
            variant="trash"
          />
        </div>
      </div>
    </div>

    <div class="store__img">
      <img :src="StoreImg" alt="Ceviche de salmão">
    </div>
  </div>

  <!-- Specs -->
  <AiqGroupRadio :products="specs" :label="specsLabel" />
</template>

<script setup>
import { ref, watch } from 'vue'
import AiqCart from './AiqCart.vue'
import AiqGroupRadio from "./AiqGroupRadio.vue"
import AiqButton from "@/ui/AiqButton.vue"
import AiqCounter from '@/ui/AiqCounter.vue';
import { useCartStore } from '@/stores/cartStore'
import { priceString } from '@/utils'
import StoreImg from '@/assets/imgs/store-img.png'

// Data
const specs = ref([
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
])

const specsLabel = ref({
  title: 'qual o tamanho?',
  subtitle: 'escolha 1',
  required: true,
})

// Stores
const cart = useCartStore()

// Props
const props = defineProps({
  product: Object
})

const productQty = ref(0)
const prductAdd = ref(false)

watch(
  productQty,
  handleQty
)

function handleQty (newQty) {
  const id = props.product.id
  const mainProduct = cart.items.find(item => item.id === id)
  
  if (mainProduct) {
    cart.updateItem({ ...mainProduct, qty: newQty })

    if (!newQty) {
      cart.removeItem({ ...mainProduct  })
      prductAdd.value = false
    }
  }
}

function addProduct () {
  const id = props.product.id
  const mainProduct = cart.items.find(item => item.id === id)

  if(!mainProduct) {
    const firstSku = specs.value[0]
    cart.updateItem({ ...firstSku, qty: 1 })
  } else {
    cart.updateItem({ ...mainProduct })
  }
  
  prductAdd.value = true
  productQty.value = 1
}
</script>

<style lang="scss">
.store__item {
  padding: 4.8rem 2.4rem;
  display: flex;
  justify-content: space-between;
}

.store__description {
  color: #6D6F73;
  font-weight: 700;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h3 {
    font-size: 2.4rem;
    color: #393A3C;
  }

  .price {
    span {
      color: #7B1FA2;
      font-weight: 800;
      font-size: 2rem;
    }
  }
}

.store__quantity {
  display: flex;
  color: #393A3C;
  line-height: normal;
  justify-content: space-between;
  align-items: center;
  padding: .8rem 0;
}

.btn--add {
  background-color: #6D6F73;
  padding: 1.1rem 2.4rem;
}
</style>