export default class PracticeAuto{
    selector = {
        AEurl : 'https://automationexercise.com/',
        loginBtn: '[href="/login"]',
        username : '[data-qa="signup-name"]',
        Email : '[data-qa="signup-email"]',
        SignUpBtn :'[data-qa="signup-button"]',
        titleMr :'[id="id_gender1"]',
        titleMrs : '[id="id_gender2"]',
        password : '[id="password"]',
        dd :'[id="days"]',
        mm :'[id="months"]',
        yy :'[id="years"]',
        checkBox1 :'[id="newsletter"]',
        checkBox2 :'[id="optin"]',
        firstName :'[id="first_name"]',
        lastName :'[id="last_name"]',
        company :'[id="company"]',
        Address1 :'[id="address1"]',
        Address2 :'[id="address2"]',
        Country :'[id="country"]',
        state :'[id="state"]',
        city :'[id="city"]',
        Zipcode :'[id="zipcode"]',
        MbNo :'[id="mobile_number"]',
        createBtn :'[data-qa="create-account"]'


    }
    
VisitUrl(){
    cy.visit(this.selector.AEurl)
}
BtnClick(css){
    cy.get(css).click()
}
newUserSignUp(data){
    cy.get(this.selector.username).type(data.username)
    cy.get(this.selector.Email).type(data.email)
}
NewUserInfo(title,data){
    cy.get(title).check()
    cy.get(this.selector.password).type(data.password)
    cy.get(this.selector.dd).select(data.dd)
    cy.get(this.selector.mm).select(data.mm)
    cy.get(this.selector.yy).select(data.yy)
    cy.get(this.selector.checkBox1).check()
    cy.get(this.selector.checkBox2).check()
}
AddressInfo(data){
    cy.get(this.selector.firstName).type(data.firstName)
    cy.get(this.selector.lastName).type(data.lastName)
    cy.get(this.selector.company).type(data.company)
    cy.get(this.selector.Address1).type(data.Address1)
    cy.get(this.selector.Address2).type(data.Address2)
    cy.get(this.selector.Country).select(data.Country)
    cy.get(this.selector.state).type(data.State)
    cy.get(this.selector.city).type(data.city)
    cy.get(this.selector.Zipcode).type(data.zipcode)
    cy.get(this.selector.MbNo).type(data.MbNo)
    
}
ValidTxT(){
    cy.contains('Account Created!').should('be.visible')
}





}

