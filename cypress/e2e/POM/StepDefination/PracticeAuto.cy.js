///<reference types="cypress" />
import Page from "../pages/PracticeAuto"
import data from "../../../fixtures/PracticeAuto"

describe("verify the functionality", function () {
  let title = undefined
    it('Create New User', function () {

        let page = new Page
        
        page.VisitUrl()
        page.BtnClick(page.selector.loginBtn)
        page.newUserSignUp(data)
        page.BtnClick(page.selector.SignUpBtn)
        // new user information 
        if(data.title=='Mrs'){
            title=page.selector.titleMrs
        }
        else {
            title=page.selector.titleMr
        }
        page.NewUserInfo(title, data)
        page.AddressInfo(data)
        page.BtnClick(page.selector.createBtn)
        page.ValidTxT()


    })
})