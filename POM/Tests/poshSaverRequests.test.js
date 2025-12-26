import { test, expect } from '@playwright/test';
import Loginpage from '../Pages/Login.page.js';
import Homepage from '../Pages/Home.page.js';
import PoshsaverRequestsPage from '../Pages/PoshSaverRequests.page.js';


let loginPage, homepage, addNewQuotationPage, poshSaverRequests;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;


test.beforeEach(async ({ page }) => {
    // Initialize page object
    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    poshSaverRequests = new PoshsaverRequestsPage(page);

    // Navigate to login page
    await loginPage.navigate();

    


});
// Test suite for end-to-end tests
test.describe('Approve and cancel requests E2E Tests', () => {

    test('approve Requests', async() => {
        // Perform login
        await loginPage.login(email, password);
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await poshSaverRequests.navigate();
        await poshSaverRequests.requestToApproveOrCancel('approve');
        // const statusText = await poshSaverRequests.statusOfRequest.textContent();
        // expect(statusText).toContain('approve');

    });

    test('cancel Requests', async()=>{
        // Perform login
        await loginPage.login(email, password);
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await homepage.poshSaverRequestsTab.click();
        await poshSaverRequests.requestToApproveOrCancel('cancel');
        // const statusText = await poshSaverRequests.statusOfRequest.textContent();
        // expect(statusText).toContain('reject');





    });






});