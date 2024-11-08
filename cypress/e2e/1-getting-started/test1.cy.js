/// <reference types="cypress" />

describe('Validate all the elements of demo site', () => {


    it('Css checks', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
        cy.get("input[value='radio1']").click();
        cy.log("clicked on radio button")

        //drop down
        cy.get("select#dropdown-class-example").select('Option1')
        cy.log("clicked on Option2")

        //check box
        cy.get("input#checkBoxOption1").click();
        cy.log("clicked on check button")


       //text
       cy.get("input#autocomplete").type('india');
       cy.log("clicked on text")
    



        
        
    })

})