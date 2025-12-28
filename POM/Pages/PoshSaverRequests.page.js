import Basepage from "./Base.page";
import { expect } from "allure-playwright";
class PoshsaverRequestsPage extends Basepage {
    constructor(page){
        super(page);
        //locators
        this.requestsList = page.locator('(//tr[@id="tableRow"])[1]')
        this.selectFirstRequest = page.locator('//th[contains(.,\'Customer Name\')]//following::button[1]')
        this.approveBtn = page.locator('[id="Approve_Invoice"]')
        this.cancelBtn = page.locator('[id="Reject_Invoice"]')
        this.statusOfRequest = page.locator('//span[@class="Paragraph200Heavy text-capitalize"]')
        this.yesBtn = page.locator('//span[@class="Button100" and contains(.,\'Yes\')]')
        this.historyBtn = page.locator('//a[@href="/poshsaver-requests/history"]')
        this.selectFirstRowHistory = page.locator('//th[contains(.,\'Customer Name\')]//following::button[1]')







    }



    async navigate(){

        await super.navigate('poshsaver-requests')

    }


    async requestToApproveOrCancel(requestType){
        let hasRequests;

        hasRequests = await expect(this.requestsList).toBeVisible()
        console.log(hasRequests)
        // if (!hasRequests) {
        //     console.log("no Requests found in poshSaver Requests tab");
        //     return;
        // }

        if (requestType === 'approve') {
            await this.selectFirstRequest.click();
            await this.approveBtn.click();
            await this.yesBtn.click();
            await this.historyBtn.click()
            await this.selectFirstRowHistory.click()
            expect(await this.statusOfRequest).toContain('approved')



        } else if (requestType === 'cancel') {
            await this.selectFirstRequest.click();
            await this.cancelBtn.click();
            await this.yesBtn();
            await this.historyBtn.click();
            await this.selectFirstRowHistory.click();
            expect(await this.statusOfRequest).toContain('Rejected')
        }

    }

    


    

}

export default PoshsaverRequestsPage;