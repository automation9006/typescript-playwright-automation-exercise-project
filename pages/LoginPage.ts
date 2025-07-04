import { Page,expect } from "@playwright/test";

export default class LoginPage{

    constructor( public page:Page){

    }

     logoImage = ('#header > div > div > div > div.col-sm-4 > div > a > img')
     topNavLinksLoc = ('#header')
     topNavHome =('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(1) > a')
     topNavProducts = ('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a')
     topNavCart = ('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a')
     topNavLoginSignUp =('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a')
     topNavTestcases = ('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a') 
     topNavAPITesting = ('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(6) > a') 
     topNavVideoTutorials = ('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(7) > a') 
     topNavContactUS = ('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(8) > a') 
     alertChromium = ('/html/body/div/div[2]/div[2]/div[2]/div[2]/button[1]')

    

    async clickSignUpLoginMenu(){

        await this.page.locator(this.topNavLoginSignUp).click()

    }

   
}