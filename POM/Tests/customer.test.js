import { test, expect } from '@playwright/test';
import Loginpage from '../Pages/Login.page.js';
import Homepage from '../Pages/Home.page.js';
import AddNewQuotationPage from '../Pages/AddNewQuotation.page.js';
import CustomersPage from '../Pages/Customers.page.js';

let loginPage, homepage, addNewQuotationPage, customersPage;
let randomEmail, randomPhone;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const firstName = process.env.CUSTOMER_FIRST_NAME
const lastName = process.env.CUSTOMER_LAST_NAME


test.beforeEach(async ({ page }) => {
    // Initialize page object
    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    addNewQuotationPage = new AddNewQuotationPage(page);
    customersPage = new CustomersPage(page);


    randomEmail = (Math.random()+ 1).toString(36).substring(2) + "@gmail.com"
    randomPhone = `012${Date.now().toString().slice(-8)}`;



    // Navigate to login page
    await loginPage.navigate();

    


});
// Test suite for end-to-end tests
test.describe('Customers E2E Tests', () => {

    test('Add new customer', async() => {
        // Perform login
        await loginPage.login(email, password);
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await homepage.customerBtn.click()
        await customersPage.addNewCustomer(firstName,lastName,randomEmail,randomPhone)
        await customersPage.verifyCustomerCreated(randomPhone)




    })






});