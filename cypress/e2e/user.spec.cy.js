import userData from '../fixtures/users/userData.json'

describe('Orange HRM tests', () => {
  
  const selectorsList={
    usernameField :'[name="username"]',
    passwordField:'[name="password"]',
    loginButton:'[type="submit"]',
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:"",
    wrongCredentialAlert:".oxd-alert",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:'.oxd-input--active',
    dateField:"[placeholder='yyyy-dd-mm']",
    dateCloseButton:".--close",
    submitButton:".oxd-button--secondary",
    selectMenu:".oxd-select-text--arrow"
  }
 

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirsNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
   // cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseNumberTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2027-05-09')
    cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.selectMenu).eq(0).click().select('British')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})