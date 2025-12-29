import { expect } from "@playwright/test";
import Basepage from "./Base.page";

class MembershipsPage extends Basepage {

    constructor(page){
        super(page)
        //locators
        this.membership_Name
        this.addNewMembershipBtn = page.locator('//button[@id="AddNewMembership_Membership"]');
        this.membershipNameInput = page.getByPlaceholder('Membership Name');
        this.cardCodeInput = page.locator('[id="Code (4 digits)"]');
        this.membershipPiceInput = page.locator('[id="Membership Price"]');
        this.uploadImageInput = page.locator('[class="ant-upload-drag-container"]');
        this.file = page.locator('[type="file"]');
        this.cardTemplateDropdown = page.locator('//span[contains(.,\'Card Template\')]//following::div[1]');
        this.selectCardTeamlateOptions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'gold\')]');
        this.benefitsDropdownlist = page.locator('//span[@class="Label100" and contains(.,\'Benefits\')]//following::input[1]')
        this.selectBenefitsOptions = page.locator('//div[@title="Flight"]')
        this.conditonDropdownlist = page.locator('//span[contains(.,\'Choose Condition\')]//preceding-sibling::span/input')
        this.selectConditionsOptions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'Business Class\')]')
        this.benefitsActionBox = page.locator('(//div[@class="ant-switch-handle"])[1]')
        this.annualFeesInput = page.locator('//span[contains(.,\'Annual Fees\')]//following::input[1]')
        this.saveBtn = page.locator('#Save_AddNewMembership')

        this.searchInput = page.locator('//input[@id="Search.."]')
        this.firstRowCreated = page.locator('//th[contains(.,\'Card Name\')]//following::button[1]')


    }

    //methods

    async navigate(){
        await super.navigate('memberships')

    }

    async createMembership(name){
        await this.addNewMembershipBtn.click();
        await this.membershipNameInput.fill(name);
        await this.cardCodeInput.fill('1234');
        await this.membershipPiceInput.fill('1000');
        await this.file.setInputFiles('/home/amir-samy/Pictures/Screenshots/admin panel master card .png');
        await this.cardTemplateDropdown.click();
        await this.selectCardTeamlateOptions.click();
        await this.benefitsDropdownlist.click();
        await this.selectBenefitsOptions.click();
        await this.conditonDropdownlist.click();
        await this.selectConditionsOptions.click();
        await this.benefitsActionBox.click();
        await this.annualFeesInput.fill('1000')
        await this.saveBtn.click();
        

    }


    async verifyMembershipcreated(name){
        await this.searchInput.fill(name);
        const text = await this.firstRowCreated.textContent();
        expect(text).toContain(name);


    }





}


export default MembershipsPage;