import { expect } from "allure-playwright";
import Basepage from "./Base.page";

class UserManagementPage extends Basepage{
    constructor(page){
        super(page)

        //Locators
        this.addNewAgentBtn = page.locator('#AddNewAgent_UserManagement');
        this.FirstNameInput = page.locator('[id="First Name"]');
        this.lastNameInput = page.locator('[id="Last Name"]');
        this.emailAddressInput = page.locator('[id="example@gmail.com"]');
        this.generatePasswoardBtn = page.locator('#GenerateAutomatically_AddNewAgent');
        this.roleDropdown = page.locator('//span[contains(.,\'Role *\')]//following::input[1]');
        this.selectRoleOptions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'Enquire Team Member\')]');
        this.saveBtn = page.locator('#save_AddNewAgent');
        this.searchInput = page.locator('[id="Search.."]');
        this.firstRowcreated = page.locator('//th[contains(.,\'Name *\')]//following::button[1]');







    }

    //Methods

    async navigate(){
        await super.navigate('user-management')
    }

    async addNewAgent(firstName, lastName, email){
        await this.addNewAgentBtn.click();
        await this.FirstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailAddressInput.fill(email);
        await this.generatePasswoardBtn.click();
        await this.roleDropdown.click();
        await this.selectRoleOptions.click();
        await this.saveBtn.click();



    }


    async verifyNewAgentCreatedSuccessfully(email, name){

        await this.searchInput.fill(email)
        const text = await this.firstRowcreated.textContent()
        expect(text).toContain(name);
    }



}

export default UserManagementPage;