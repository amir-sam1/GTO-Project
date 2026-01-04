import { expect } from "allure-playwright";
import Basepage from "./Base.page";

class ServicePage extends Basepage {
    constructor(page) {
        super(page)
        
        //Locators
        this.addNewAccommodationBtn = page.locator('#AddNewAccommodation_Servives');
        this.accommodationTypeDropdown = page.locator('//span[contains(.,\'Accommodation Type *\')]//following::input[1]');
        this.selectAccommodationTypeOtions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'Hotel\')]');
        this.countryDropdown = page.locator('//span[contains(.,\'Country *\')]//following::input[1]');
        this.selectCountryOptions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'Aland Islands\')]');
        this.cityDropdown = page.locator('//span[contains(.,\'City *\')]//following::input[1]');
        this.selectCityOptions = page.locator('//div[@class="styles_tagOption__iIRzL" and contains(.,\'Aabenraa\')]');
        this.nameInput = page.locator('#Name');
        this.addresInput = page.locator('#Address');
        this.ratingBtn = page.locator('(//div[@role="radio"])[5]')
        this.placePolicesInput = page.locator('//textarea[@id="Place Policies"]')
        this.saveBtn = page.locator('#Save_AddNewAccomodation')
        this.firstRowCreate = page.locator('//th[contains(.,\'Accommodation Name\')]//following::button[1]')
        

    }




    //Methods
        async createNewService(name,address){
        await this.addNewAccommodationBtn.click();
        await this.accommodationTypeDropdown.click();
        await this.selectAccommodationTypeOtions.click();
        await this.countryDropdown.click();
        await this.selectCountryOptions.click();
        await this.cityDropdown.click();
        await this.selectCityOptions.click();
        await this.nameInput.fill(name);
        await this.addresInput.fill(address);
        await this.ratingBtn.click();
        await this.placePolicesInput.fill('For test Automatin');
        await this.saveBtn.click();

    }

        async verifyServiceCreated(name){
            const text = await this.firstRowCreate.textContent();
            expect(text).toContain(name);


        }

  
    
    

}

export default ServicePage;