import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const total = computed(() => {
    return items.value.reduce((acc, current) => {
      const itemTotal = current.price * current.qty;
      return acc + itemTotal;
    }, 0);
  })

  function updateItem ({ ...args }) {
    const { id } = { ... args }
    const productIdx = items.value.findIndex(item => item.id === id)

    if (productIdx > -1) {
      items.value[productIdx] = { ...items.value[productIdx], ...args   }
    } else {
      addItem({ ...args })
    }
  }

  function addItem ({ ...args }) {
    const { id, price, qty } = { ...args }
    
    if (id, price, qty) {
      items.value.push({ ...args })
    }
  }

  function removeItem ({ id }) {
    const productIdx = items.value.findIndex(item => item.id === id)

    if (productIdx > -1) {
      items.value.pop(id)
    }
  }

  return { items, total, addItem, removeItem, updateItem}
})
