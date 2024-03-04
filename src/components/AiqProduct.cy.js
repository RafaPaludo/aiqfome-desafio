import AiqProduct from './AiqProduct.vue'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'

describe('<AiqProduct />', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const cart = useCartStore()
    cart.$patch({ items: [
      { qty: 2, price: 100 }
    ]})

    cy.mount(AiqProduct, {
      props: {
        mainProduct: {
          id: 70,
          name: 'Ceviche de salmão',
          price: 19.90,
          description: 'salmão temperado com limão, cebola e pimenta',
          specs: {
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
          }
        }
      }
    })
  })

  it('render all specs infos', () => {
    cy.get('.store__header h3').should('have.text', 'Ceviche de salmão')
    cy.get('.product__description').should('have.text', 'salmão temperado com limão, cebola e pimenta')
    cy.get('.price span').should(($el) => {
      const text = $el.text()
      expect(text.includes('19,90')).to.be.true
    })
    cy.get('.group__title').should('have.text', 'qual o tamanho?')
    cy.get('.group__subtitle').should('have.text', 'escolha 1')
    cy.get('.badge').should('exist')
  })
})