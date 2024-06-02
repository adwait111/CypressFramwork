///<reference types='cypress' />
import { ContactUs } from "../pages/ContactUs";
describe('webDriver', function () {
    let Locator = new ContactUs

    it("contactUs form", function () {
        Locator.VistUrl(Locator.WebLocators.url)
        Locator.FillForm("suvrana", "chaskar", "suvarna111@gamil.com", "i am js learner")
        Locator.FormSumit()
        cy.get('h1').should('contain', 'Thank You')

    })
})