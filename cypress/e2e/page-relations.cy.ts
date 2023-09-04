import sample from '../fixtures/sample.json'

describe('Page Relations', () => {
  beforeEach(() => {
    cy.visit('/relations')
  })

  it('displays the Relations table', () => {
    cy.contains('h1', 'Relations')
    cy.contains('th', 'Name')
    cy.contains('th', 'Surname')
  })

  it('Retrieves the relations', () => {
    const [firstRow] = sample
    cy.contains('td', firstRow.name)
    cy.contains('td', firstRow.surname)
    cy.contains('td', firstRow.gender)
    cy.contains('td', firstRow.age)
    cy.contains('td', firstRow.phone)
    cy.contains('td', firstRow.address)
  })

  it('Navigates to relation page on click', () => {
    const [firstRow] = sample
    cy.contains(firstRow.address).click()
    cy.location('pathname').should('eq', `/relation/${firstRow.id}`)
  })
})
