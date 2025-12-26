import Basepage from "./Base.page.js";

class AddNewQuotationPage extends Basepage{
    constructor(page) {
        super(page);
        // Locators
        this.quotation_Id;
        this.CustomerIdInput = page.locator('[id="Customer_ID"]');
        this.selectCustomerOptions = page.locator("//div[@class='styles_tagOption__iIRzL']//span[contains(text(),'amir samiTestAccount +20 1273440171')]");
        this.QuotationIdInput = page.locator('//input[@id="Quotation ID *"]');
        this.selectPaymentGateway = page.locator('//input[@value="kashier"]');
        this.currencyDropdown = page.locator('#currency');
        this.selectCurrencyOption = page.locator("//div[@class='styles_tagOption__iIRzL' and contains(.,'GBP')]");
        this.creationDateInput = page.locator("(//span[contains(.,'Creation date')]/following::div)[1]");
        this.selectCreationDate = page.locator("(//span[contains(.,'Creation date')]/following::div)[1]/following::a");
        this.creattionTimeInput = page.locator("(//span[contains(.,'Creation time')]/following::div)[1]");
        this.selectCreationTime = page.locator("(//span[contains(.,'Creation time')]/following::div)[1]/following::a");
        this.quotationTypeDropdown = page.locator("(//span[contains(.,'Quotation Type *')]/following::div)[1]");
        this.selectGeneralQuotationOption = page.locator("//div[@class='styles_tagOption__iIRzL' and contains(.,'General')]");
        this.selectAccommodationQuotationOption = page.locator("//div[@class='styles_tagOption__iIRzL' and contains(.,'Accomodation')]");
        this.nextButton = page.locator("//button[contains(.,'Next')]");
        this.GeneralQuotationTypeDropdown = page.locator("(//input[@class='ant-select-selection-search-input'])[4]");
        this.selectQuotationTypeOption = page.locator('//div[@title="Car Rental"]');
        this.parameternameInput = page.getByPlaceholder('Name');
        this.parameterValueInput = page.getByPlaceholder('Value');
        this.parameterorderInput = page.getByPlaceholder('Order');
        this.priceinput = page.getByPlaceholder('Price*');
        this.priceAccomdarionIput = page.locator("//input[@id='Price *']");
        this.activationDateInput = page.locator("(//span[contains(.,'Wallet Credit Activation Date')]/following::div)[1]");
        this.selectActivationDate = page.locator("(//span[contains(.,'Wallet Credit Activation Date')]/following::div)[1]/following::a");
        this.cityInput = page.locator("//span[@class='ant-select-selection-placeholder' and contains(.,'City')]//preceding::input[1]");
        this.selectCityOptionAccomdation = page.locator('//span[contains(.,"City *")]//following::div[@class="ant-select-item-option-content" and contains(.,"Cairo, Egypt")]');
        this.accomedationNameInput = page.locator("//span[@class='ant-select-selection-placeholder' and contains(.,'Accommodation Name')]//preceding::input[1]");
        this.accomedationTypeDropdown = page.locator("//input[@aria-controls='Accommodation_Type_list']");
        this.selectAccomodationTypeOption = page.locator('//div[@title="Hotel"]');
        this.ratingInput = page.locator("//input[@id='Rating *']");
        this.addressInput = page.locator('#Address');
        this.boardTypeDropdown = page.locator("//span[@class='ant-select-selection-placeholder' and contains(.,'Board type')]//preceding::input[1]");
        this.selectBoardTypeOption = page.locator('//div[@class="ant-select-item-option-content" and contains(.,\'Room Only\')]');
        this.roomTypeInput = page.locator('#Room');
        this.adultsInput = page.locator('#Adults');
        this.checkInDateInput = page.locator("//span[@class='d-block mb-2 Label100' and contains(.,'Check In *')]//following::input[1]");
        this.selectCheckInDate = page.locator("(//span[@class='d-block mb-2 Label100' and contains(.,'Check In *')]/following::input)[1]/following::a");
        this.checkOutDateInput = page.locator("//span[@class='d-block mb-2 Label100' and contains(.,'Check Out *')]//following::input[1]");
        this.selectCheckOutDate = page.locator("(//span[@class='d-block mb-2 Label100' and contains(.,'Check Out *')]/following::input)[1]/following::a");
        this.selectFlightQuotationOption = page.locator("//div[@class='styles_tagOption__iIRzL' and contains(.,'Flight')]");
        this.priceinputFlight = page.locator("(//span[contains(.,'Price*')]//following::input)[1]");
        this.airlineInput = page.locator("(//span[contains(.,'Airline')]//following::input)[1]");
        this.airlineCodeInput = page.locator("//span[contains(.,'Airline Code')]//following::input[1]");
        this.flightNumberInput = page.locator("//span[contains(.,'Flight Number')]//following::input[1]");
        this.departureAirportCodeInput = page.locator("//span[contains(.,'Departure Airport Code')]//following::input[1]");
        this.departureAirportInput = page.locator("(//span[contains(.,'Departure Airport')]//following::input)[2]")
        this.departureTerminalInput = page.locator("(//span[contains(.,'Departure Terminal')]//following::input)[1]");
        this.departureCityInput = page.locator("(//span[contains(.,'Departure City')]//following::input)[1]");
        this.selectCityOptionFlight = page.locator('//span[contains(.,\'Departure City\')]//following::div[@class="ant-select-item-option-content" and contains(.,\'New York\')]');
        this.departureDateInput = page.locator("//span[contains(.,'Departure Date')]//following::input[1]");
        this.selectDepartureDate = page.locator("//span[contains(.,'Departure Date')]//following::a[1]");
        this.departureTimeInput = page.locator('//span[contains(.,\'Departure Time\')]//following::input[1]');
        this.selectDepartureTime = page.locator("//span[contains(.,'Departure Time')]//following::a[1]");
        this.durationInput = page.locator("(//span[contains(.,'Duration')]//following::input)[1]");
        this.arrivalAirportCodeInput = page.locator("(//span[contains(.,'Arrival Airport Code')]//following::input)[1]");
        this.arrivalAirportInput = page.locator("(//span[contains(.,'Arrival Airport')]//following::input)[2]");
        this.arriveTerminalInput = page.locator("(//span[contains(.,'Arrival Terminal')]//following::input)[1]");
        this.arrivalCityInput = page.locator("(//span[contains(.,'Arrival Terminal')]//following::input)[2]");
        this.arrivalDateInput = page.locator("(//span[contains(.,'Arrival Date')]//following::input)[1]");
        this.selectArrivalDate = page.locator("(//span[contains(.,'Arrival Date')]//following::a)[1]");
        this.arrivalTimeInput = page.locator("(//span[contains(.,'Arrival Time')]//following::input)[1]");
        this.selectArrivalTime = page.locator("(//span[contains(.,'Arrival Time')]//following::a)[1]");
        this.cabinInput = page.locator("(//span[contains(.,'Cabin')]//following::input)[1]");
        this.baggageAllowanceInput = page.locator("(//span[contains(.,'Baggage Allowance')]//following::input)[1]");



        

    }

    async navigate() {
        await super.navigate('/quotations/add-new-quotation');
    }



    async createQuatation(customerId,quotationType) {

        await this.CustomerIdInput.fill(customerId);
        await this.selectCustomerOptions.click();
        await this.selectPaymentGateway.click();
        this.quotation_Id = await this.QuotationIdInput.inputValue();
        await this.currencyDropdown.click();
        await this.selectCurrencyOption.click();
        await this.creationDateInput.click();
        await this.selectCreationDate.first().click();



        if (quotationType === 'general') {
            await this.quotationTypeDropdown.click();
            await this.selectGeneralQuotationOption.click();
            await this.nextButton.click();
            await this.GeneralQuotationTypeDropdown.click();
            await this.selectQuotationTypeOption.click();
            await this.parameternameInput.fill('Test Parameter');
            await this.parameterValueInput.fill('Test Value');
            await this.parameterorderInput.fill('1');
            await this.priceinput.fill('100');
            await this.activationDateInput.click();
            await this.selectActivationDate.first().click();
            await this.nextButton.click();
            console.log(`General Quotation with ID ${this.quotation_Id} created successfully`);

        
    }


    if (quotationType === 'Accommodation'){
        await this.quotationTypeDropdown.click();
        await this.selectAccommodationQuotationOption.click();
        await this.nextButton.click();
        await this.cityInput.fill('Cairo');
        await this.selectCityOptionAccomdation.click();
        await this.accomedationNameInput.fill('Test Accommodation');
        await this.accomedationTypeDropdown.click();
        await this.selectAccomodationTypeOption.click();
        await this.ratingInput.fill('5');
        await this.addressInput.fill('123 Test St, Cairo, Egypt');
        await this.boardTypeDropdown.click();
        await this.selectBoardTypeOption.click();
        await this.roomTypeInput.fill('Deluxe');
        await this.adultsInput.fill('2');
        await this.priceAccomdarionIput.fill('1000');
        await this.checkOutDateInput.click();
        await this.selectCheckOutDate.first().click();
        await this.checkInDateInput.click();
        await this.selectCheckInDate.first().click();
        // const check_In = await this.checkInDateInput.inputValue();
        // console.log(check_In);
        await this.nextButton.click();
        console.log(`Accommodation Quotation with ID ${this.quotation_Id} created successfully`);

    }


    if (quotationType === 'Flight') {
        // Flight quotation creation steps to be implemented
        await this.quotationTypeDropdown.click();
        await this.selectFlightQuotationOption.click();
        await this.nextButton.click();
        await this.priceinputFlight.fill('500');
        await this.airlineInput.fill('Test Airline');
        await this.airlineCodeInput.fill('TA');
        await this.flightNumberInput.fill('TA123');
        await this.departureAirportCodeInput.fill('JFK');
        await this.departureAirportInput.fill('John F. Kennedy International Airport');
        await this.departureTerminalInput.fill('4');
        await this.departureCityInput.fill('New York');
        await this.selectCityOptionFlight.click();
        await this.departureDateInput.click();
        await this.selectDepartureDate.first().click();
        await this.departureTimeInput.click();
        await this.selectDepartureTime.first().click();
        await this.durationInput.fill('7');
        await this.arrivalAirportCodeInput.fill('LHR');
        await this.arrivalAirportInput.fill('London Heathrow Airport');
        await this.arriveTerminalInput.fill('5');
        await this.arrivalCityInput.fill('London');
        await this.arrivalDateInput.click();
        await this.selectArrivalDate.first().click();
        await this.arrivalTimeInput.click();
        await this.selectArrivalTime.first().click();
        await this.cabinInput.fill('Economy');
        await this.baggageAllowanceInput.fill('20kg');
        await this.nextButton.click();
        console.log(`Flight Quotation with ID ${this.quotation_Id} created successfully`);
        
       
        




    }
}


}
export default AddNewQuotationPage;