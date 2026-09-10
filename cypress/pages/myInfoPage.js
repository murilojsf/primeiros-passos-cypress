class MyInfoPage{
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField:"[name='middleName']",
            lastNameField:"[name='lastName']",
            genericField:'.oxd-input--active',
            dateField:"[placeholder='yyyy-dd-mm']",
            dateCloseButton:".--close",
            submitButton:".oxd-button--secondary",
            selectMenu:".oxd-select-text",
            optionChosing: ".oxd-select-option",
            genderSelection:".oxd-radio-wrapper"
        }
        return selectors
    }
        fillPersonalDetails(firstName,middleName,lastName,nickName){
            cy.get(this.selectorsList().firstNameField).clear({ force: true }).type(firstName)
            cy.get(this.selectorsList().middleNameField).clear({ force: true }).type(middleName)
            cy.get(this.selectorsList().lastNameField).clear({ force: true }).type(lastName)
            cy.get(this.selectorsList().genericField).eq(3).clear({ force: true }).type(nickName)
        }
        fillEmployeeDetails(employeeID,otherId,driversLicense,driversLicenseDate){
            cy.get(this.selectorsList().genericField).eq(3).clear({ force: true }).type(employeeID)
            cy.get(this.selectorsList().genericField).eq(4).clear({ force: true }).type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear({ force: true }).type(driversLicense)
            cy.get(this.selectorsList().genericField).eq(6).clear({ force: true }).type(driversLicenseDate)
            cy.get(this.selectorsList().dateCloseButton).click()
        }

        fillStatus(dateOfBirth){
            cy.get(this.selectorsList().selectMenu).eq(0).click()
            cy.get(this.selectorsList().optionChosing).contains('Algerian').click()
            cy.get(this.selectorsList().selectMenu).eq(1).click()
            cy.get(this.selectorsList().optionChosing).contains('Single').click()
            cy.get(this.selectorsList().genericField).eq(7).clear().type(dateOfBirth)
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().genderSelection).eq(1).click()
          }
        saveForm(){
            cy.get(this.selectorsList().submitButton).eq(0).click()
            cy.get('body').should('contain', 'Successfully Updated')
             cy.get('.oxd-toast-close')
        
        }
}
export default MyInfoPage