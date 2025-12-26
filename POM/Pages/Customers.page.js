import { expect } from "allure-playwright";
import Basepage from "./Base.page";


class CustomersPage extends Basepage {
    constructor(page){
        super(page);
        // Locators
        this.addNewCustomerBtn = page.locator("//span[@class=\"Button200 text-nowrap\" and contains(.,'Add New Customer')]");
        this.firstNameInput = page.locator('//input[@id="First Name"]');
        this.lastNameInput = page.locator('//input[@id="Last Name"]');
        this.emailInput = page.locator('//input[@id="Email Address"]');
        this.companyDropdown = page.locator('//span[@class="d-block mb-2 Label100" and contains(.,\'Company\')]//following::input[1]');
        this.selectCountryOptions = page.locator('//div[@class="styles_tagOption__iIRzL"]//following::span[contains(.,\'GTO\')]');
        this.phoneInput = page.locator('//input[@id="Mobile Number"]');
        this.cardTypeDropdown = page.locator('//span[@class="d-block mb-2 Label100" and contains(.,\'Card Type\')]//following::input[1]');
        this.selectCardTypeOption = page.locator('//div[@class="styles_tagOption__iIRzL"]//following::span[contains(.,\'BLACK\')]');
        this.countrydropdown = page.locator('(//span[@class="d-block mb-2 Label100" and contains(.,\'Country\')]//following::input)[1]');
        this.selectCountryOption = page.locator('//div[@class="styles_tagOption__iIRzL"]//following::span[contains(.,\'Aland Islands\')]');
        this.generateCodeBtn = page.locator('//button[@id="GenerateAutomatically_MembershipCardDetails"]');
        this.expiryDateDropdown = page.getByPlaceholder('MM/YY');
        this.selectDateOptins = page.locator('//div[@class="ant-picker-cell-inner" and contains(.,\'Dec\')]');
        this.wallletAmountInput = page.locator('//input[@id="Wallet Amount"]');
        this.walletTypeDropdown = page.locator('(//div[@class="ant-select-selector"])[7]');
        this.selectTypeOptions = page.locator('//span[contains(.,\'Black Friday Card\')]');
        this.activeradioBtn = page.locator('//span[@class="Label100" and contains(.,\'Active\')]//following::button[1]');
        this.saveBtn = page.locator('//button[@id="save_CreateCustomerProfile"]');
        this.searchInput= page.locator('//input[@id="Search.."]')



    }


    async navigate(){
        await super.navigate('/customers');
    }


    async addNewCustomer(firstName, lastName, email, phone){
        await this.addNewCustomerBtn.click();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.companyDropdown.click();
        await this.selectCountryOptions.click();
        await this.phoneInput.fill(phone);
        await this.cardTypeDropdown.click();
        await this.selectCardTypeOption.click();
        await this.countrydropdown.click();
        await this.selectCountryOption.click();
        await this.generateCodeBtn.click();
        await this.expiryDateDropdown.click();
        await this.selectDateOptins.click();
        await this.wallletAmountInput.fill('1000');
        await this.walletTypeDropdown.click();
        await this.selectTypeOptions.click();
        await this.activeradioBtn.click();
        await this.saveBtn.click();
        await expect(this.saveBtn).toBeVisible()
    }

    async verifyCustomerCreated(randomPhone){
        await this.searchInput.fill(randomPhone)
        const locator = this.page.locator(`text=${randomPhone}`)
        await expect(locator).toBeVisible()

    }





}

export default CustomersPage;