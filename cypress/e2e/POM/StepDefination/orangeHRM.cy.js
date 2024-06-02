///<reference types='cypress' />
import HRM from "../pages/orangeHRM";
import Data from "../../../fixtures/orangeHRM.json"
describe('Verify orangeHRM login page',function(){
    let page = new HRM
    it('verify login with valid credential',function(){
        page.visiturl()
        page.LoginUser(Data.valid)
        cy.url().should('contain','dashboard/index')
    })
    it('login with invalid credential',function(){
        page.visiturl()
        page.LoginUser(Data.invalid)
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})