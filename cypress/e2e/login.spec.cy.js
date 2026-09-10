import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPages from '../pages/dashboardPage.js'


const loginPage= new LoginPage()
const dashboardPage= new DashboardPages()


describe('Login Orange HRM Tests', () => {
  
  it('Login - Fail', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithAnyUser(userData.userFail.username,userData.userFail.password)
   loginPage.checkAccessInvalid()
  })
    it('Login - Success', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithAnyUser(userData.userSucess.username,userData.userSucess.password)
   dashboardPage.checkingDashboardPage()
  })
})
