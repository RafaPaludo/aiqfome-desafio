<template>
  <div class="store__item">
    <div class="store__description">
      <div class="store__header">
        <h3>{{ mainProduct.name }}</h3>
        <p class="price">a partir de <span>{{ priceString(mainProduct.price) }}</span></p>
        <p class="product__description">{{ mainProduct.description }}</p>
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
  <AiqGroupRadio :products="mainProduct.specs.products" :label="mainProduct.specs.label" ref="groupSpecs" />
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

// Stores
const cart = useCartStore()

// Props
const props = defineProps({
  mainProduct: Object
})

// Data
const productQty = ref(0)
const prductAdd = ref(false)
const groupSpecs = ref(null)

// Watch
watch(
  productQty,
  updateMainProductQty
)

watch(
  cart.items,
  syncMainProductInCart
)

// Functions
/**
 * It deals with the quantity of the main product.
 * If the product already exists in the cart, the quantity will be updated. 
 * If quantity is zero, removes the product from the cart.
 * 
 * @param {number} newQty
 */
function updateMainProductQty (newQty) {
  const mainProduct = getMainProductInCart()
  
  if (mainProduct) {
    cart.updateItem({ ...mainProduct, qty: newQty })

    if (!newQty) {
      cart.removeItem({ ...mainProduct  })
      groupSpecs.value.checked = null
      prductAdd.value = false
    }
  }
}

/**
 * This function adds the first sku product to the cart and updates its quantity to 1.
 */
function addProduct () {
  const mainProductInCart = getMainProductInCart()
  const firstSpec = props?.mainProduct?.specs?.products[0] || null

  if (mainProductInCart) {
    return
  }

  groupSpecs.value.checked = firstSpec.sku || null
  prductAdd.value = true
  productQty.value = 1
}

/**
 * Each time the cart is updated, it synchronizes the main product with its initial values.
 */
function syncMainProductInCart () {
  const mainProduct = getMainProductInCart()

  if (mainProduct) {
    prductAdd.value = true
    productQty.value = mainProduct.qty
  }
}

/**
 * Get the main product if it is in the cart.
 * 
 * @returns {object | null}
 */
function getMainProductInCart () {
  const id = props.mainProduct.id
  const mainProduct = cart.items.find(item => item.id === id)

  return ( mainProduct ? mainProduct : null )
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