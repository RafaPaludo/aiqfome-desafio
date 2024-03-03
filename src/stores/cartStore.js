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
      console.log(`Produto id: ${id}, [${args}] alterado com sucesso!`)
    } else {
      addItem({ ...args })
    }
  }

  function updateQuantity ({ id, qty }) {
    const productIdx = items.value.findIndex(item => item.id === id)

    if (productIdx > -1) {
      items.value[productIdx].qty = qty
      console.log(`Produto id: ${id} removido com sucesso!`)
    }
  }

  function addItem ({ ...args }) {
    const { id, price, qty } = { ...args }
    
    if (id, price, qty) {
      items.value.push({ ...args })
      console.log(`Produto id: ${id}, price: ${price}, qty: ${qty} adicionado com sucesso!`)
    }
  }

  function removeItem ({ id }) {
    const productIdx = items.value.findIndex(item => item.id === id)

    if (productIdx > -1) {
      items.value.splice(productIdx, 1)
      console.log(`Produto id: ${id} removido com sucesso!`)
    }
  }

  return { items, total, addItem, removeItem, updateItem, updateQuantity }
})
