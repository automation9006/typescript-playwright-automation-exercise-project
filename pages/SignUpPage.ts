import {  Page,expect } from "@playwright/test"

export default class SignUpPage{

    constructor(public page:Page){

    }

    name = ("input[data-qa='signup-name']")
    emailAddress = ("input[data-qa='signup-email']")
    signUpButton=("button[data-qa='signup-button']")
    mrs = ("#uniform-id_gender2")
    mr =  ("#uniform-id_gender1")
    inputRegName = ("#name")
    inputPassword = ("#password")
    selectDay =("#days")
    selectMonth=("#months")
    selectYear=("#years")
    checkBoxNewsLetter=("#newsletter")
    checkBoxSpecialOffer=("#optin")
    inputFirstName=("#first_name")
    inputLasttName=("#last_name")
    inputEmail =("#email")
    inputCompany=("#company")
    inputAddress1=("#address1")
    inputAddress2=("#address2")
    selectCountry=("#country")
    inputState=("#state")
    inputCity=("#city")
    inputZipCode=("#zipcode")
    inputMobileNo=("#mobile_number")
    buttonCreate = ("button[data-qa='create-account']")
    messageAccountCreated =("[data-qa='account-created']")
    messageAccountDeleted =("[data-qa='account-deleted']")
    messageAccountCreatedCongratulations=("#form > div > div > div > p:nth-child(2)")
    messageAccountCreatedMemPrivilages=("#form > div > div > div > p:nth-child(3)")
    buttonContinue =("[data-qa='continue-button']")
    buttonLogout = ("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a")
    buttonDeleteAccount = ("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a")

    async acceptAlert() {
    //   // Wait for the consent popup to appear
        // await this.page.click('text=Manage Options')
      await this.page.getByRole('button', { name: /consent/i }).click()
    }

    async inputNameOnLoginPage(name) {
        await this.page.locator(this.name).waitFor({ state: 'visible' })
        await this.page.locator(this.name).fill(name)
    }

    async inputEmailAddress(email) {
        await this.page.locator(this.emailAddress).waitFor({ state: 'visible' })
        await this.page.locator(this.emailAddress).fill(email)
    }

    async buttonSignup() {
        await this.page.locator(this.signUpButton).waitFor({ state: 'visible' })
        await this.page.locator(this.signUpButton).click()
        await this.page.waitForTimeout(5000)
    }

    async userRegClickTitle(locator,) {
        await this.page.locator(locator).waitFor({ state: 'visible' })
        await this.page.locator(locator).click()
    }
    
    async userRegFullName(regName,) {
        await this.page.locator(this.inputRegName).waitFor({ state: 'visible' })
        await this.page.locator(this.inputRegName).fill(regName)
    }
    
    async userRegEmail(email,) {
        await this.page.locator(this.inputEmail).waitFor({ state: 'visible' })
        await expect(this.page.locator(this.inputEmail)).toHaveValue(email)
    }
    
    async userRegPassword(password,) {
        await this.page.locator(this.inputPassword).waitFor({ state: 'visible' })
        await this.page.locator(this.inputPassword).fill(password)
    }

    async userRegDate(day) {
        await this.page.locator(this.selectDay).waitFor({ state: 'visible' })
        await this.page.locator(this.selectDay).selectOption(day)
    }
       
    async userRegMonth(month,) {
        await this.page.locator(this.selectMonth).waitFor({ state: 'visible' })
         await this.page.locator(this.selectMonth).selectOption(month)
    }   
    
    async userRegYear(year,) {
        await this.page.locator(this.selectYear).waitFor({ state: 'visible' })
        await this.page.locator(this.selectYear).selectOption(year)
    } 
    
    async userRegSelectNewsLetter() {
        await this.page.locator(this.checkBoxNewsLetter).waitFor({ state: 'visible' })
        await this.page.locator(this.checkBoxNewsLetter).click()
        await this.page.locator(this.checkBoxSpecialOffer).click()
    } 
    
    async userRegFirstName(firstName) {
        await this.page.locator(this.inputFirstName).waitFor({ state: 'visible' })
        await this.page.locator(this.inputFirstName).fill(firstName)
    } 

    async userRegLastName(lastName) {
        await this.page.locator(this.inputLasttName).waitFor({ state: 'visible' })
       await this.page.locator(this.inputLasttName).fill(lastName)
    } 
    
    async userRegCompany(company) {
        await this.page.locator(this.inputCompany).waitFor({ state: 'visible' })
       await this.page.locator(this.inputCompany).fill(company)
    } 
    
    async userRegAddress1(address1) {
       await this.page.locator(this.inputAddress1).waitFor({ state: 'visible' })
       await this.page.locator(this.inputAddress1).fill(address1)
    } 
       
    async userRegAddress2(address2) {
       await this.page.locator(this.inputAddress2).waitFor({ state: 'visible' })
       await this.page.locator(this.inputAddress2).fill(address2)
    }  
    
    async userRegCountry(country) {
       await this.page.locator(this.selectCountry).waitFor({ state: 'visible' })
       await this.page.locator(this.selectCountry).selectOption(country)
    }  
    
    async userRegState(state) {
       await this.page.locator(this.inputState).waitFor({ state: 'visible' })
       await this.page.locator(this.inputState).fill(state)
    } 
    
    async userRegCity(city) {
        await this.page.locator(this.inputCity).waitFor({ state: 'visible' })
       await this.page.locator(this.inputCity).fill(city)
    }    
        
    async userRegZipCode(zipCode) {
        await this.page.locator(this.inputZipCode).waitFor({ state: 'visible' })
        await this.page.locator(this.inputZipCode).fill(zipCode)
    }    
   
    async userRegMobileNum(mobileNum) {
        await this.page.locator(this.inputMobileNo).waitFor({ state: 'visible' })
        await this.page.locator(this.inputMobileNo).fill(mobileNum)
    }  
            
    async buttonCreateAccount(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.locator(this.buttonCreate).click()
    ])
    }

    async validateAccountCreation(){
        await expect(this.page.locator(this.messageAccountCreated)).toBeVisible()
        await expect(this.page.locator(this.messageAccountCreated)).toHaveText('Account Created!')
        await expect(this.page.locator(this.messageAccountCreatedCongratulations)).toHaveText("Congratulations! Your new account has been successfully created!")
        await expect(this.page.locator(this.messageAccountCreatedMemPrivilages)).toHaveText("You can now take advantage of member privileges to enhance your online shopping experience with us.")
        await this.page.locator(this.buttonContinue).click()
        await expect(this.page.locator(this.buttonLogout)).toBeVisible()
    }

    async deleteAccount(){
        this.page.locator(this.buttonDeleteAccount).click()
        await expect(this.page.locator(this.messageAccountDeleted)).toHaveText('Account Deleted!')
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.locator(this.buttonContinue).click()
    ])
    }
   
}   