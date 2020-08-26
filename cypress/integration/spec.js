/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('./test.html')
    cy.wait(500)
  })
})
