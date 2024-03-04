import AiqCart from './AiqCart.vue'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'

describe('<AiqCart />', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const cart = useCartStore()
    cart.$patch({ items: [
      { qty: 2, price: 100 }
    ]})

    cy.mount(AiqCart)
  })

  it('renders total', () => {
    cy.get('.total__price').should(($el) => {
      const text = $el.text()
      expect(text.includes(200)).to.be.true
    })
  })
})