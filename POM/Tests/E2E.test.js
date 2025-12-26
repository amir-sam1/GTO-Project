import { test, expect } from '@playwright/test';
import Loginpage from '../Pages/Login.page.js';
import Homepage from '../Pages/Home.page.js';
import AddNewQuotationPage from '../Pages/AddNewQuotation.page.js';

let loginPage;
let homepage;
let addNewQuotationPage;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const customerId = process.env.CUSTOMER_ID;
const generalQuotationType = process.env.GENERAL_QUOTATION_TYPE;


test.beforeEach(async ({ page }) => {
    // Initialize page object
    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    addNewQuotationPage = new AddNewQuotationPage(page);

    // Navigate to login page
    await loginPage.navigate();

});

// Test suite for end-to-end tests

test.describe('End-to-End Tests', () => {

    test('Create general Quotation without wallet', async () => {

        // Perform login
        await loginPage.login(email, password);
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await homepage.clickAddNewQuotationBtn.click();
        await addNewQuotationPage.createQuatation(customerId, generalQuotationType);
        await homepage.verifyQuotationCreated(addNewQuotationPage.quotation_Id);

    });

    test('Create accommodation Quotation without wallet', async () => {

        // Perform login
        await loginPage.login(email, password);
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await homepage.clickAddNewQuotationBtn.click();
        await addNewQuotationPage.createQuatation(customerId, 'Accommodation');
        await homepage.verifyQuotationCreated(addNewQuotationPage.quotation_Id);

    });

    test('Create flight Quotation without wallet', async () => {

        // Perform login
        await loginPage.login(email, password);
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await homepage.clickAddNewQuotationBtn.click();
        await addNewQuotationPage.createQuatation(customerId, 'Flight');
        await homepage.verifyQuotationCreated(addNewQuotationPage.quotation_Id);

    });



});