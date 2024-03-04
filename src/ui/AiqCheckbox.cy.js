import AiqCheckbox from './AiqCheckbox.vue'

describe('<AiqCheckbox />', () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AiqCheckbox, {
      props: {
        id: 100
      }
    })
  })

  it('renders a input type="checkbox"', () => {
    cy.get('input').should('have.attr', 'type', 'checkbox')
  })

  it('should have attr id equal to props.id', () => {
    cy.get('input').should('have.attr', 'id', 100)
  })

  it('expect model be undefined at first render', () => {
    cy.get('input')
      .then(($checkbox) => {
        const initalValue = $checkbox[0]._modelValue
        
        expect(initalValue).to.equal(undefined)
      })
  })

  it('expect model be true at when clicked', () => {
    cy.get('input')
      .click()
      .then(($checkbox) => {
        const initalValue = $checkbox[0]._modelValue
        
        expect(initalValue).to.equal(true)
      })
  })

  it('expect model be false when clicked twice', () => {
    cy.get('input')
      .dblclick()
      .then(($checkbox) => {
        const initalValue = $checkbox[0]._modelValue
        
        expect(initalValue).to.equal(false)
      })
  })
})