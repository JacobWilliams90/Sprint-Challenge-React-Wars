describe('Do the cards load?', function() {
    it('Loads the cards correctly', function () {
        cy.visit('http://localhost:3000/')
        cy.contains('Name')

    }
    )})

describe('intentionally failing, expecting title to be React Wars', function () {
    it('Checks the title', function () {
        cy.visit('http://localhost:3000/')
        cy.title().should('eq', 'React Wars')
    })
})