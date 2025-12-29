import { expect } from "@playwright/test";
import Basepage from "./Base.page";

class Homepage extends Basepage {

    constructor(page){
        super(page);
        this.clickAddNewQuotationBtn = page.locator("//span[contains(.,'Add New Quotation')]");
        this.searchQuotationInput = page.locator('//input[@id="Search.."]');
        this.customerBtn = page.locator("//span[@class=\"styles_navTitle__u9Bvz w-100 Paragraph200Heavy\" and contains(.,'Customers')]");
        this.poshSaverRequestsTab = page.locator('//a[@href="/poshsaver-requests"]')
        this.memebershipsBtn = page.locator('//span[@class="styles_navTitle__u9Bvz w-100 Paragraph200Heavy" and contains(.,\'Memberships\')]')
    }

    async navigate(){
        await super.navigate('/quotations');

    }

    async verifyQuotationCreated(quotationId){
        await this.searchQuotationInput.fill(quotationId);
        const locator = this.page.locator(`text=${quotationId}`);
        await expect(locator).toBeVisible();

    }




}
export default Homepage;