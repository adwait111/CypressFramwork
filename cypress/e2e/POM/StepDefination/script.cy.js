///<reference types='cypress' />
import HomePage from "../pages/HomePage"

describe('E-Commerce Site', () => {

    let select = new HomePage

    it('POM', () => {
        select.VisitUrl(select.selector.EcommUrl)
        select.searchProduct('ca')
        select.selectProduct('Cashews')
        select.placeOrder()
        select.ValidateTxt()
    })


})