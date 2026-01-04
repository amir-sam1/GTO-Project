import { expect, test } from "@playwright/test";
import Loginpage from "../Pages/Login.page";
import Homepage from "../Pages/Home.page";
import SupplierPage from "../Pages/Supplier.page";
let loginPage, homepage,servicesPage,supplierPage,randomName;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;



test.beforeEach(async({page})=>{

    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    supplierPage = new SupplierPage(page);

    randomName = `Supplier${(Math.random()+ 1).toString(36).substring(2)}`

    await loginPage.navigate();






});


test.describe('Supplier E2E Test',()=>{


    test('Create new Supplier successfully', async()=>{
        await loginPage.login(email, password)
        expect( await loginPage.getByText('amir agent')).toBeVisible
        await homepage.supplierBtn.click();
        await supplierPage.addNewSupplier(randomName);
        await supplierPage.verifySupplierAddSuccessfullty(randomName);
      





    })






})











