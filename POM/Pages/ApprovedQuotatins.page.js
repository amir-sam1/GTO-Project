import { expect } from "allure-playwright";
import Basepage from "./Base.page";

class approvedQuotationsPage extends Basepage {
    constructor(page){
        super(page);
        
        //Locators
        this.searchApprovedQuotationInput = page.locator('//input[@id="Search.."]');
        this.firstApprovedQuotationInList = page.locator('//th[contains(.,\'Quotation ID\')]//following::button[1]');
        this.approvedStatusLabel = page.locator('//span[@class="Paragraph200Heavy" and contains(.,\'APPROVED\')]');
    }

    async navigate(){
        await super.navigate('quotations/approved-quotations');
    }

    async verifyQuotationApproved(quotationId){
        await this.searchApprovedQuotationInput.fill(quotationId);
        await this.firstApprovedQuotationInList.click();
        const status = await this.approvedStatusLabel.textContent();
            expect(status).toContain('APPROVED');
        

}

}
export default approvedQuotationsPage;