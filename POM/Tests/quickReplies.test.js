import { expect, test } from "@playwright/test";
import Loginpage from "../Pages/Login.page";
import Homepage from "../Pages/Home.page";
import QuickRepliesPage from "../Pages/QuickReplies.page";
let loginPage, homepage, quickRepliesPage, randomquickReply;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;



test.beforeEach(async ({ page }) => {

    loginPage = new Loginpage(page);
    homepage = new Homepage(page);
    quickRepliesPage = new QuickRepliesPage(page)
    randomquickReply = `Quick Reply ${(Math.random()+ 1).toString(36).substring(2)}`
    

    await loginPage.navigate();


});


test.describe('Quick Replies', () =>{

    test('Create quick reply' , async()=>{
        await loginPage.login(email,password)
        await expect(await homepage.getByText('amir agent')).toBeVisible();
        await homepage.chatBtn.click();
        await homepage.quickRepliesTab.click();
        await quickRepliesPage.createQuickReply(randomquickReply)
        await quickRepliesPage.verifyQuickReplyExists(randomquickReply);

    });







});

