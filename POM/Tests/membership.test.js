
import { test, expect } from '@playwright/test';
import Loginpage from '../Pages/Login.page.js';
import Homepage from '../Pages/Home.page.js';
import MemberShipsPage from '../Pages/Memberships.page.js';

let loginPage, homepage, memberShip, randomName;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;


test.beforeEach(async ({ page }) => {
    // Initialize page object
    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    memberShip = new MemberShipsPage(page);
    randomName = (Math.random()+ 1).toString(36).substring(2)

    // Navigate to login page
    await loginPage.navigate();

    


});
// Test suite for end-to-end tests
test.describe('Membership E2E Tests', () => {

    test('Create membership successfully', async() => {
        // Perform login
        await loginPage.login(email, password);
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await homepage.memebershipsBtn.click();
        await memberShip.createMembership(randomName);
        await memberShip.verifyMembershipcreated(randomName)

    });








});