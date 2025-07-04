import {test} from "../../fixtures/fixtures"
import * as userRegData from "../../testdata/userRegistration-Data.json"
import { deleteUserIfExists } from '../../utils/apiHelpers'
import generateTestData from '../../mockdata/mockData'

test.beforeEach(async ({page,baseURL,signUpPage}) =>{
    await page.goto(`${baseURL}`)
     await signUpPage.acceptAlert()
    
})

test.describe('tests to validate user registration journey', () => {
    const fakerData = generateTestData()

    test("validate user registration successful", async ({ loginPage, signUpPage }) => {
 
        await loginPage.clickSignUpLoginMenu()
        await signUpPage.inputNameOnLoginPage(fakerData.fullName)
        await signUpPage.inputEmailAddress(fakerData.email)
        await signUpPage.buttonSignup()
        await signUpPage.userRegClickTitle(signUpPage.mr)
        await signUpPage.userRegFullName(fakerData.fullName)
        await signUpPage.userRegEmail(fakerData.email)
        await signUpPage.userRegPassword(fakerData.password)
        await signUpPage.userRegDate(fakerData.date)
        await signUpPage.userRegMonth(fakerData.month)
        await signUpPage.userRegYear(fakerData.year)
        await signUpPage.userRegSelectNewsLetter()
        await signUpPage.userRegFirstName(fakerData.firstName)
        await signUpPage.userRegLastName(fakerData.lastName)
        await signUpPage.userRegCompany(fakerData.company)
        await signUpPage.userRegAddress1(fakerData.address1)
        await signUpPage.userRegAddress2(fakerData.address2)
        await signUpPage.userRegCountry(userRegData.country)
        await signUpPage.userRegState(fakerData.state)
        await signUpPage.userRegCity(fakerData.city)
        await signUpPage.userRegZipCode(fakerData.zipCode)
        await signUpPage.userRegMobileNum(fakerData.phone)
        await signUpPage.buttonCreateAccount()
        await signUpPage.validateAccountCreation()
   
    })

    test.afterEach(async ({ signUpPage }) => {
    
        // await signUpPage.deleteAccount()
        await deleteUserIfExists(fakerData.email, fakerData.password);
    })

})