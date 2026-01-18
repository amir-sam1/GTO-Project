import Basepage from "./Base.page";

class QuotationsPage extends Basepage {
    constructor(page){
        super(page);
        
        //Locators
        this.quotation_Id;
        this.searchQuotationInput = page.locator('//input[@id="Search.."]');
        this.QuotationIdRefrence = page.locator('//div[@class="d-flex justify-content-between "]//following::span[contains(.,\'U60244C47331T1768745942424\')]');
        this.firstQuotationInList = page.locator('//th[contains(.,\'Quotation ID\')]//following::button[1]');
        this.approveQuotationBtn = page.locator('//button[contains(.,\'Approve Quotation Manually\')]');
        this.selectApprovalMethod = page.locator('[id="Select_Approval_Method"]')
        this.selectApprovalMethodOption = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'Cash\')]');
        this.uploadpaymentProof = page.locator('//button[@id="UploadPayment_QuotationDetails" and contains(.,\'Add Payment\')]//preceding-sibling::input')
        this.submitBtn = page.locator('//button[@id="payment_method_Take_Action"]');
    }

    async navigate(){
        await super.navigate('quotations');
    }

    async approveQuotation(){
        await this.firstQuotationInList.click();
        this.quotation_Id = await this.QuotationIdRefrence.textContent();
        await this.approveQuotationBtn.click();
        await this.selectApprovalMethod.click();
        await this.selectApprovalMethodOption.click();
        await this.uploadpaymentProof.setInputFiles('/home/amir-samy/Pictures/Screenshots/quotation empty message displayed.png');
        await this.submitBtn.click();



}

}

export default QuotationsPage;