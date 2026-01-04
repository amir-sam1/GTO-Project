import { expect, test } from "@playwright/test";
import Loginpage from "../Pages/Login.page";
import Homepage from "../Pages/Home.page";
import CompaniesPage from "../Pages/Companies.page"

let loginPage, homepage,companies,randomCompanyEmail,randomCompanyName,randomCompanyCode

const email = process.env.EMAIL;
const password = process.env.PASSWORD;



test.beforeEach(async ({ page }) => {

    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    companies = new CompaniesPage(page)

    randomCompanyEmail = (Math.random()+ 1).toString(36).substring(2) + "@gmail.com"
    randomCompanyName = `Test${(Math.random()+ 1).toString(36).substring(2)}`
    randomCompanyCode = `${Date.now().toString().slice(-4)}`;

    await loginPage.navigate();


});


test.describe('Company E2E tests', () =>{

    test('Create Company Successfully' , async()=>{
        await loginPage.login(email,password)
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await homepage.companiesBtn.click();
        await companies.CreateNewCompany(randomCompanyName,randomCompanyCode,randomCompanyEmail)
        await companies.verifyCompanyCreated(randomCompanyName)


    });







});

