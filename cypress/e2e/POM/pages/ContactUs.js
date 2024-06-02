export class ContactUs{
    WebLocators = {
        url :'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstName :'[name="first_name"]',
        LastName :'[name="last_name"]',
        EmailAddress:'[name="email"]',
        Comments :'[name="message"]',
        Reset :'input[type="reset"]',
        Submit:'input[type="reset"]'
    }
    VistUrl(){
        cy.visit(this.WebLocators.url)
    }

    FillForm(fn,ln,email,comment){
        cy.get(this.WebLocators.firstName).type(fn)
        cy.get(this.WebLocators.LastName).type(ln)
        cy.get(this.WebLocators.EmailAddress).type(email)
        cy.get(this.WebLocators.Comments).type(comment) 
    }
    FormSumit(){
        cy.get(this.WebLocators.Submit).click()
    }
    FormReset(){
        cy.get(this.WebLocators.Reset).click()
        
        
    }
    
 
}