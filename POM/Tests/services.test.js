import { expect, test } from "@playwright/test";
import Loginpage from "../Pages/Login.page";
import Homepage from "../Pages/Home.page";
import ServicePage from "../Pages/Service.page";
let loginPage, homepage,servicesPage,randomName,randomAddress

const email = process.env.EMAIL;
const password = process.env.PASSWORD;



test.beforeEach(async({page})=>{

    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    servicesPage = new ServicePage(page);

    randomName = `Test${(Math.random()+ 1).toString(36).substring(2)}`
    randomAddress = `${Date.now().toString().slice(-2)}Haram, Giza`;

    await loginPage.navigate();






});


test.describe('Service E2E Test',()=>{


    test('Create new services successfully', async()=>{
        await loginPage.login(email, password)
        expect( await loginPage.getByText('amir agent')).toBeVisible
        await homepage.servicesBtn.click();
        await servicesPage.createNewService(randomName,randomAddress);
        await servicesPage.verifyServiceCreated(randomName);
        console.log('CI =', process.env.CI);





    })






})











