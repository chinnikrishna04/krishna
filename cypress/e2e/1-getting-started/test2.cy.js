/// <reference types="cypress" />

describe('Validate all the elements of demo site', () => {


    it('Css checks', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(2000)
        cy.get("input.search-keyword").type('ca');
        cy.log("search-button")
        cy.get('.product:visible').should('have.length',4)
    



        
        
    })

})