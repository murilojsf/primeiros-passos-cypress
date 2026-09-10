import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPages from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage= new LoginPage()

const dashboardPage= new DashboardPages()

const menuPage = new MenuPage()

describe('Orange HRM tests', () => {
  
  const selectorsList={
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:".orangehrm-dashboard-grid",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
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
 

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username,userData.userSucess.password)
    dashboardPage.checkingDashboardPage()
    menuPage.accessMyInfo()
   // cy.get(selectorsList.myInfoButton).click()
   // cy.get(selectorsList.firstNameField).clear().type('FirsNameTest')
   // cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
 //   cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
   // cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
  //  cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
  //  cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
//cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseNumberTest')
  //  cy.get(selectorsList.genericField).eq(6).clear().type('2027-05-09')
  //  cy.get(selectorsList.dateCloseButton).click()
  //  cy.get(selectorsList.selectMenu).eq(0).click()
   // cy.get(selectorsList.optionChosing).contains('Algerian').click()
   // cy.get(selectorsList.selectMenu).eq(1).click()
   // cy.get(selectorsList.optionChosing).contains('Single').click()
   // cy.get(selectorsList.genericField).eq(7).clear().type('2003-04-10')
   // cy.get(selectorsList.dateCloseButton).click()
   // cy.get(selectorsList.genderSelection).eq(1).click()
  //  cy.get(selectorsList.submitButton).eq(0).click()
    //cy.get('body').should('contain', 'Successfully Updated')
   // cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
