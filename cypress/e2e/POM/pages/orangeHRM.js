class HRM{
    selector = {
        url :"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        username :'[name="username"]',
        password : '[name="password"]',
        loginBtn :'[type="submit"]'
    }
    visiturl(){
        cy.visit(this.selector.url)
    }
    LoginUser(data){
        cy.get(this.selector.username).type(data.username)
        cy.get(this.selector.password).type(data.password)
        cy.get(this.selector.loginBtn).click()
    }
    


}
export default HRM