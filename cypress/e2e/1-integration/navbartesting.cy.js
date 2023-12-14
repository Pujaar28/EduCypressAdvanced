/// <reference types="cypress"/>

describe('Navigation Bar Testing',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
   })

   it('Should display homepage content', () => {
    cy.contains('Zero Bank').click()
    cy.url().should('include', 'index.html')  
    cy.get('#online_banking_features').should('be.visible')   
    cy.get('#nav').should('be.visible') 
});

   it('Should display online bank content', () => {
       cy.get('#onlineBankingMenu > div > strong').click()
       cy.url().should('include','online-banking.html')
       cy.get('h1').should('be.visible')
       cy.get('#online_banking_features > :nth-child(1)').should('be.visible')
       cy.get('#online_banking_features > :nth-child(2)').should('be.visible')
       cy.get('.disclaimer').should('be.visible')
       cy.get('#nav').should('be.visible')
       cy.get('h3').should('contain.text','Our Bank is trusted by over 1,000,000 customers world wide.\n                Sign in now!\n        ')
       cy.get('h3 > a').should('exist')
    });

   it('Should display feedback content', () => {
       cy.contains('Feedback').click()
       cy.url().should('include','feedback.html')
       cy.get('.signin-controls').should('be.visible')
       cy.get('.btn-signin').should('exist')
       cy.get('[type="reset"]').should('exist')
       cy.get('#feedback-title').should('be.visible')
       cy.get('.extra-inner').should('exist')
   });

})