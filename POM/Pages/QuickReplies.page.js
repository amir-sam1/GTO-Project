import { expect } from "@playwright/test";
import Basepage from "./Base.page.js";

class QuickRepliesPage extends Basepage {
    constructor(page) {
        super(page);
        //Locators
        this.addNewQuickReplyBtn = page.getByRole('button', { name: 'Add New Quick Reply' });
        this.quickReplyInput = page.locator('[id="Enter Quick Reply Text"]');
        this.saveBtn = page.getByRole('button', { name: 'Save' });


    }

    //Methods

    async navigate() {
        await super.navigate('chat/quick-replies');

    }

    async createQuickReply(replyText) {
        await this.addNewQuickReplyBtn.click();
        await this.quickReplyInput.fill(replyText);
        await this.saveBtn.click();
    }

    async verifyQuickReplyExists(replyText) {
        const quickReplyLocator = this.page.locator(`text=${replyText}`);
        await expect(quickReplyLocator).toBeVisible();

    }

        

        
}

export default QuickRepliesPage;