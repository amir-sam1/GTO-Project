import { expect } from "allure-playwright";
import Basepage from "./Base.page";

class companiesPage extends Basepage{
    constructor(page){
        super(page)

        //Locators
        this.addNewCompanyBtn = page.locator('//button[@id="AddNewCompany_Companies"]');
        this.companyLogoFile = page.locator('//input[@type="file"]');
        this.companyNameInput = page.getByPlaceholder('Company Name');
        this.comapnayCodeInput = page.getByPlaceholder('Company Code');
        this.companyEmailInput = page.getByPlaceholder('Company Login Email');
        this.membershipDropdown = page.locator('//span[contains(.,\'Memberships(1) *\')]//following::input[1]');
        this.selectMembershipOptions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'Premier (EDUSAVING)\')]');
        this.selecFirstmembershipOptions = page.locator('//span[contains(.,\'Memberships(1) *\')]//following::input[1]/following::div[10]')
        this.limitationMembershipInput = page.locator('//span[contains(.,\'Limitation On Membership(1) *\')]//following::input[1]');
        this.notesInput = page.locator('[id="Notes"]'); 
        this.saveBtn = page.locator('[id="save_AddNewCompany"]')
        this.searchInput = page.locator('[id="Search.."]')
        this.scrollContainer = page.locator('//div[@class="rc-virtual-list-scrollbar rc-virtual-list-scrollbar-vertical"]');


        
        


    }

    //Methods (i would to know hot to scroll to element)

    async CreateNewCompany(name, code, email){

        await this.addNewCompanyBtn.click();
        await this.companyLogoFile.setInputFiles('/home/amir-samy/Pictures/Screenshots/filechoose.png');
        await this.companyNameInput.fill(name);
        await this.comapnayCodeInput.fill(code);
        await this.companyEmailInput.fill(email);
        await this.membershipDropdown.click();
        await this.selecFirstmembershipOptions.click()
        await this.limitationMembershipInput.fill('1000');
        await this.notesInput.fill('Add Company For Test');
        await this.saveBtn.click();

    }


    async verifyCompanyCreated(name){
        await this.searchInput.fill(name)
        const locator = this.page.locator(`text=${name}`)
        expect(locator).toBeVisible()

    }

}

export default companiesPage;