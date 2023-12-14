/// <reference types="cypress"/>

describe('Login/Logout test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('Invalid Username')
        cy.wait(2000).get('#user_password').type('Invalid Password')
        cy.get('.btn').click()
    });
    it('Should display error message', () => {
        cy.get('.alert').should('contain.text','Login and/or password are wrong.')
    });
    it('Should login to application with valid data', () => {
        cy.fixture("users").then(user=>{
            const username = user.username
            const password = user.password
            
            cy.get('#login_form').should('be.visible')
            cy.get('#user_login').type(username)
            cy.wait(2000).get('#user_password').type(password)
            cy.get('.btn').click() 

            cy.get('h2').should('contain.text','Cash Accounts')
        })
    });

    it('Should logout from the application',()=>{
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('#signin_button').should('be.visible')
    })
})