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
        fillingInputs(){
            cy.get(this.selectorsList.firstNameField).clear().type('FirsNameTest')
            cy.get(this.selectorsList.middleNameField).clear().type('MiddleNameTest')
            cy.get(this.selectorsList.lastNameField).clear().type('LastNameTest')
            cy.get(this.selectorsList.genericField).eq(3).clear().type('NicknameTest')
            cy.get(this.selectorsList.genericField).eq(3).clear().type('Employee')
            cy.get(this.selectorsList.genericField).eq(4).clear().type('OtherIdTest')
            cy.get(this.selectorsList.genericField).eq(5).clear().type('DriversLicenseNumberTest')
            cy.get(this.selectorsList.genericField).eq(6).clear().type('2027-05-09')
            cy.get(this.selectorsList.dateCloseButton).click()
            cy.get(this.selectorsList.selectMenu).eq(0).click()
            cy.get(this.selectorsList.optionChosing).contains('Algerian').click()
            cy.get(this.selectorsList.selectMenu).eq(1).click()
            cy.get(this.selectorsList.optionChosing).contains('Single').click()
            cy.get(this.selectorsList.genericField).eq(7).clear().type('2003-04-10')
            cy.get(this.selectorsList.dateCloseButton).click()
            cy.get(this.selectorsList.genderSelection).eq(1).click()
            cy.get(this.selectorsList.submitButton).eq(0).click()
            cy.get('body').should('contain', 'Successfully Updated')
             cy.get('.oxd-toast-close')
        }
}
export default MyInfoPage