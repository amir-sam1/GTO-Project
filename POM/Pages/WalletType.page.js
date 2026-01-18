import Basepage from "./Base.page";

class WalletTypePage extends Basepage{
    constructor(page){
        super(page)

        //Locators
        this.addNewWalletBtn = page.locator('#Add_New_Wallet_Type');
        this.walletIconFile = page.locator('//input[@type="file"]');
        this.walletTypeNameInput = page.locator('[id="Enter wallet type name"]');
        this.walletDecInput = page.locator('[id="Enter description"]');
        this.startDateDropdown = page.locator('(//span[contains(.,\'Start Date\')]//following::input[@id="Start_Date"])[1]');
        this.selectStartDateOptions = page.locator('(//span[contains(.,\'Start Date\')]//following::input[@id="Start_Date"])[1]//following::a[1]');
        this.endDateDropdown = page.locator('(//span[contains(.,\'End Date\')]//following::input[@id="End_Date"])[1]');
        this.selectEndDateOptions = page.locator('(//span[contains(.,\'End Date\')]//following::input[@id="End_Date"])[1]//following::a[1]');
        this.bookingStartDateDropdown = page.locator('(//span[contains(.,\'Start Date\')]//following::input[@id="Start_Date"])[2]');
        this.bookingSelectStartDateOptions = page.locator('(//span[contains(.,\'Start Date\')]//following::input[@id="Start_Date"])[2]//following::a[2]');
        this.bookingEndDateDropdown = page.locator('(//span[contains(.,\'End Date\')]//following::input[@id="End_Date"])[2]');
        this.bookingSelectEndDateOptions = page.locator('(//span[contains(.,\'End Date\')]//following::input[@id="End_Date"])[2]//following::a[2]');
        this.bookingThresholdInput = page.locator('[id="Enter threshold in days"]');
        this.maxPercentagePerQuotationInput = page.locator('[id="Enter maximum percentage"]');
        this.saveBtn = page.locator('//button[contains(.,\'Save\')]');




    }

    //Methods

    async navigate(){
        await super.navigate('wallet-types')
    }

    async CreateNewWallet(name){
        await this.addNewWalletBtn.click();
        await this.walletIconFile.setInputFiles('/home/amir-samy/Pictures/Screenshots/quotation empty message displayed.png');
        await this.walletTypeNameInput.fill(name);
        await this.walletDecInput.fill('For automation test');
        await this.startDateDropdown.click();
        await this.selectStartDateOptions.click();
        await this.endDateDropdown.click();
        await this.selectEndDateOptions.click();
        await this.bookingStartDateDropdown.click();
        await this.bookingSelectStartDateOptions.click();
        await this.bookingEndDateDropdown.click();
        await this.bookingSelectEndDateOptions.click()
        await this.maxPercentagePerQuotationInput.fill('50');
        await this.saveBtn.click();
        
    }
}

export default WalletTypePage;