import {test,expect} from "../../fixtures/fixtures"

test.beforeEach(async ({page,baseURL,signUpPage}) =>{
    await page.goto(`${baseURL}`)
     await signUpPage.acceptAlert()
    
})


test.describe('validate home page elements', () => {

  test('verify main menu elements', async ({ page,signUpPage }) => {
    
 
  })
})


