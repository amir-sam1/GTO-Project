import { expect, test } from "@playwright/test";
import Loginpage from "../Pages/Login.page";
import Homepage from "../Pages/Home.page";
import UserManagementPage from "../Pages/UserManagement.page";
let loginPage, homepage,userManagementPage,randomfirstName, randomlastName, randomEmail;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;



test.beforeEach(async({page})=>{

    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    userManagementPage = new UserManagementPage(page);

    randomfirstName = `first${(Math.random()+ 1).toString(36).substring(2).slice(-4)}`;
    randomlastName = `last${(Math.random()+ 1).toString(36).substring(2).slice(-4)}`;
    randomEmail = (Math.random()+ 1).toString(36).substring(2) + "@gmail.com"


    
    await loginPage.navigate();






});


test.describe('User Management E2E Test',()=>{


    test('Create new User Management', async()=>{
        await loginPage.login(email, password);
        expect( await loginPage.getByText('amir agent')).toBeVisible();
        await homepage.userManagementBtn.click();
        await userManagementPage.addNewAgent(randomfirstName,randomlastName,randomEmail);
        await userManagementPage.verifyNewAgentCreatedSuccessfully(randomEmail,randomfirstName);





    })






})











