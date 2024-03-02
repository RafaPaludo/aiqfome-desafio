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
          <p v-if="cart.total">total: {{ priceString(cart.total) }} </p>
        </div>
        <div class="store__quantity--actions">
          <TheButton class="btn--add" @click="addToCart(1)" v-if="!itemQty">
            adicionar
          </TheButton>
          <TheCounter
            v-else 
            :counterValue="itemQty"
            size="large"
            variant="trash"
            @addToCart="addToCart"
            @removeToCart="removeToCart"
          />
        </div>
      </div>
    </div>

    <div class="store__img">
      <img :src="StoreImg" alt="Ceviche de salmão">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { priceString } from '@/utils'
import StoreImg from '@/assets/imgs/store-img.png'
import TheButton from './TheButton.vue'
import TheCounter from './TheCounter.vue'

// Props
const props = defineProps({
  product: Object
})

// Data
const itemQty = ref(0)

// Stores
const cart = useCartStore()

// Functions
function addToCart (qty) {
  console.log(props.product)
  itemQty.value = qty
  cart.updateItem({ ...props.product, qty })
}

function removeToCart (qty) {
  cart.updateItem({ ...props.product, qty })

  if(qty === 0) {
    cart.removeItem({ ...props.product })
    itemQty.value = qty
  }
}
</script>

<style lang="scss">
.store__item {
  padding: 0 4.8rem 2.4rem;
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