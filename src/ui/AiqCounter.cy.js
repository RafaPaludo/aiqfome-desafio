import AiqCounter from './AiqCounter.vue'

describe('<AiqCounter />', () => {
  beforeEach(() => {
    cy.mount(AiqCounter)
      .then( ({ wrapper, component}) => {
        wrapper.vm.model = 10
      })
  })

  it('should render remove and add button', () => {
    cy.get('button.counter__remove').should('exist')
    cy.get('button.counter__add').should('exist')
  })

  it('should render input with initial value', () => {
    cy.get('input').should('have.value', 10)
  })

  it('should add 1 to input value', () => {
    cy.get('button.counter__add').click()
    cy.get('input').should('have.value', 11)
  })

  it('should removes 1 to input value', () => {
    cy.get('button.counter__remove').click()
    cy.get('input').should('have.value', 9)
  })
})