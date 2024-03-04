import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const total = computed(() => {
    return items.value.reduce((acc, current) => {
      const itemTotal = current.price * current.qty;
      return acc + itemTotal;
    }, 0);
  })

  /**
   * Updates the item properties of the product in the cart.
   * 
   * @param {Object} item - The product item to be update 
   */
  function updateItem ({ ...args }) {
    const { id } = { ... args }
    const productIdx = items.value.findIndex(item => item.id === id)

    if (productIdx > -1) {
      items.value[productIdx] = { ...items.value[productIdx], ...args   }
    } else {
      addItem({ ...args })
    }
  }

  /**
   * Adds the product to the cart.
   * 
   * @param {Object} item - The product item to be added 
   * @param {number} item.id - The product id
   * @param {number} item.price - The product price
   * @param {number} item.qty - The product qty
   */
  function addItem ({ ...args }) {
    const { id, price, qty } = { ...args }
    
    if (id, price, qty) {
      items.value.push({ ...args })
    }
  }

  /**
   * Removes the product to the cart based on its id.
   * 
   * @param {Object} item - The product item to be added 
   * @param {number} item.id - The product id 
   */
  function removeItem ({ id }) {
    const productIdx = items.value.findIndex(item => item.id === id)

    if (productIdx > -1) {
      items.value.splice(productIdx, 1)
    }
  }

  return { items, total, addItem, removeItem, updateItem }
})
