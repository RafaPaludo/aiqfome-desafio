import AiqLabel from './AiqLabel.vue'



describe('<AiqLabel />', () => {
  beforeEach(() => {
    cy.mount(AiqLabel, {
      props: {
        for: 10,
        productLabel: 'refrigerante',
        productPrice: 5,
        productOldPrice: 6,
        productQty: 1,
        productRequired: false
      }
    })
  })

  it('renders a label with all props', () => {
    cy.get('label').should('have.attr', 'for', 10)
    cy.get('.label__text span').should('have.text', 'refrigerante')
    cy.get('.label__price').should(($el) => {
      const text = $el.text()
      expect(text.includes(5)).to.be.true
    })
    cy.get('.label__prices span').should(($el) => {
      const text = $el.text()
      expect(text.includes(6)).to.be.true
    })
  })

  it('should render + if productRequired is false', () => {
    cy.get('.label__price span').should('have.text', '+')
  })

  it('should render icon if product old price  exists', () => {
    cy.get('.label__text img').should('exist')
  })
})