import AiqRadio from './AiqRadio.vue'

describe('<AiqRadio />', () => {
  beforeEach(() => {
    cy.mount(AiqRadio, {
      props: {
        id: 100
      }
    })
  })

  it('renders a input type="radio"', () => {
    cy.get('input').should('have.attr', 'type', 'radio')
  })

  it('should have attr id equal to props.id', () => {
    cy.get('input').should('have.attr', 'id', 100)
  })

  it('expect value be equal to id', () => {
    cy.get('input')
      .then(($radio) => {
        const value = $radio[0]._value
        
        expect(value).to.equal(100)
      })
  })
})