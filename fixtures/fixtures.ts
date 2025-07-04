import {test as baseTest} from "@playwright/test"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"

type pages ={

    signUpPage :SignUpPage
    loginPage  :LoginPage
}

const testPages = baseTest.extend<pages>({
   
    signUpPage:async ({page},use) =>{
    await use(new SignUpPage(page))
    },
    loginPage:async ({page},use) =>{
        await use(new LoginPage(page))
    }
})

export const test = testPages
export const expect = testPages.expect