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
            variant="add"
            @click="addProduct"
            v-if="!prductAdd"
          >Adicionar</AiqButton>

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
  <AiqGroupRadio :products="specs.products" :label="specs.label" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { priceString } from '@/utils'
import { useCartStore } from '@/stores/cartStore'
import AiqCart from '@/components/AiqCart.vue'
import AiqGroupRadio from "@/components/AiqGroupRadio.vue"
import AiqButton from "@/ui/AiqButton.vue"
import AiqCounter from '@/ui/AiqCounter.vue';
import StoreImg from '@/assets/imgs/store-img.png'

// Data
const specs = ref({
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
})

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

// Watch
watch(
  productQty,
  handleQty
)

// Function
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
    const firstSku = specs.value.products[0]
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
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: space-between;
}

.store__img {
  padding: 1rem 0;
  flex-grow: 1;
  max-width: 40rem;

  img {
    width: 100%;
  }
}

.store__description {
  color: var(--color-text-primary);
  font-weight: 700;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h3 {
    font-size: 2.4rem;
    color: var(--color-text-secundary);
  }

  .price {
    span {
      color: var(--color-ui-primary);
      font-weight: 800;
      font-size: 2rem;
    }
  }
}

.store__quantity {
  display: flex;
  color: var(--color-text-secundary);
  line-height: normal;
  justify-content: space-between;
  align-items: center;
  padding: .8rem 0;
}

@media screen and (max-width: 900px) {
  .store__item {
    padding-left: 0;
    padding-right: 0;
  }

  .store__img {
    flex-grow: 1;
    max-width: none;
  }
  
  .store__description {
    flex-grow: 1;
  }
}
</style>