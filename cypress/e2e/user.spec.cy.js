import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPages from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance=require('chance')

const chance = new Chance()
const loginPage= new LoginPage()
const dashboardPage= new DashboardPages()
const menuPage = new MenuPage()
const myInfoPage= new MyInfoPage()

describe('Orange HRM tests', () => {
  
  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username,userData.userSucess.password)
    
    dashboardPage.checkingDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(),chance.string(),chance.last(),chance.string({ length: 5 }))
    myInfoPage.fillEmployeeDetails('Employee','OtherId','DriversLicenseNumber','2027-05-09')
    myInfoPage.fillStatus('2003-04-02')
    myInfoPage.saveForm()

 })
 })
