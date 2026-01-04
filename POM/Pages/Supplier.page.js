import { expect } from "allure-playwright";
import Basepage from "./Base.page";

class SupplierPage extends Basepage{
    constructor(page){
        super(page)
        //Locaors
        this.addNewSupllierBtn = page.locator('#AddNewSupplier_Suppliers');
        this.nameInput = page.locator('#Name');
        this.serviceTypeDropdown = page.locator('//input[@id="Service_Type"]');
        this.selectServiceTypeOptions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'Airports\')]')
        this.gtoCurrentAmountInput = page.locator('//span[contains(.,\'GTO Current Amount\')]//following::input[1]')
        this.currencyDropdown = page.locator('//span[contains(.,\'Currency *\')]//following::input[1]')
        this.selectCurrencyOptions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'GBP\')]')
        this.saveBtn = page.locator('Save_AddNewSuppliers')
        this.searchInput = page.locator('#Search..')





    }

    //Methods
    async navigate(){
        await super.navigate('suppliers');
    }

    async addNewSupplier(name){
        await this.addNewSupllierBtn.click();
        await this.nameInput.fill(name);
        await this.serviceTypeDropdown.click();
        await this.selectServiceTypeOptions.click();
        // await this.gtoCurrentAmountInput.fill('1000');
        // await this.currencyDropdown.click();
        // await this.selectCurrencyOptions.click();
        // await this.saveBtn.click();

    }

    async verifySupplierAddSuccessfullty(name){
        await this.searchInput.fill(name);
        const locator = await this.page.locator(`text=${name}`)
        expect(locator).toBeVisible();



    }

}



export default SupplierPage;