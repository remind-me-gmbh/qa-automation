const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const { keyboard } = require('@playwright/test');

export class YourOfferJourney {

    constructor(page) {
        this.page = page;
        this.loginbutton = page.locator('//span[text()="Einloggen"]');
        this.email = page.locator('//input[@placeholder="E-Mail-Adresse"]');
        this.password = page.locator('//input[@type="password"]');
        this.loginDetails = page.locator('//button[text()="Einloggen"]');
        this.viewOffer = page.locator('//button[text()="Angebote ansehen"]');
        this.offerDetail = page.locator('(//button[@type="button"])[2]');
        this.createFreeexchange = page.locator('//button[text()="Kostenlosen Wechselservice anlegen"]');
        this.cheaperProvider = page.locator('//span[text()="Günstigerer Anbieter"]');
        this.firstOccupancy = page.locator('(//button[text()="Jetzt Sparpotential prüfen"])');
        this.relocation = page.locator('//span[text()="50m²"]');
        this.clickfurther = page.locator('//button[text()="Weiter"]');
        this.housebuuton = page.locator('(//span[text()="Haus"])');
        this.size = page.locator('//div[contains(@class,"radio-button Radio-module_radioContent__Mi7zU")]');
        this.postalCode = page.locator('//input[@placeholder="z.B. 10115"]');
        this.areaSelectionfeild = page.getByPlaceholder('z. B. Berlin');
        this.postalcode_city_selection = page.getByRole('option', { name: 'Berlin / Mitte' });
        this.currentservice_provider = page.locator('//input[@type="search"]'); 
        this.currentservice_options = page.locator('(//div[@role="option"])[2]'); 
        this.alltariff_ = page.locator('//font[text()="All tariffs"]');
        this.ecotariff= page.locator('//span[text()="Nein, alle Tarife berücksichtigen"]',{ state: 'visible' });
        this.gassConnectionForm_Salutation = page.locator('(//div[@role="radiogroup"]//div)[1]',{ state: 'visible' });
        this.gassConnectionForm_firstName = page.locator('//input[@name="firstname"]');
        this.gassConnectionForm_lastName = page.locator('//input[@name="lastname"]');
        this.gassConnectionForm_dateOfbirth_day = page.locator('(//input[@inputmode="numeric"])[1]');
        this.gassConnectionForm_dateOfbirth_month = page.locator('(//input[@inputmode="numeric"])[2]');
        this.gassConnectionForm_dateOfbirth_year = page.locator('//input[@placeholder="JJJJ"]');
        this.gassConnectionForm_Street = page.locator('//input[@placeholder="Straße"]');
        this.gassconnectionchoseaddress = page.locator('//div[text()="Ackerstr."]');
        this.gassConnectionForm_house = page.locator('//input[@placeholder="Hausnummer"]');
        this.gassConnectionForm_phoneNumber = page.locator('//input[@placeholder="Telefonnummer"]');
        this.iban = page.locator('//input[@placeholder="IBAN"]');
        this.autoSignature = page.locator('(//input[@name="same_as_delivery"])[2]');
        this.confirmButton = page.locator('//button[text()="Bestätigen"]');
        this.login = page.locator ('//span[text()="Einloggen"]');
       
    }
    async gotoremindme(){
        const { baseURL } = this.page.context()._options;
        //await this.page.goto(`${baseURL}`);
        await this.page.goto('https://www.remind.me/')
        await this.loginbutton.click();
        // Function to accept cookies
            const acceptCookiesButton = await this.page.waitForSelector('(//button[text()="Alle Akzeptieren"])');
            if (acceptCookiesButton) {
            await acceptCookiesButton.click();
        }
    }
    
    async loginUser(Email,Password){
        await this.email.fill(Email);
        await this.clickfurther.click();
        await this.password.fill(Password);
        await this.loginDetails.click();
    }

    async  clickonViewOffer(){
        await this.viewOffer.click();
    }

    async  clickonofferDetails(){
        await this.offerDetail.click();
    }

    async  clickonCreateFreeExchange(){
        await this.createFreeexchange.click();
    }

    async  clickoncheaperProvider(){
        await this.cheaperProvider.click();
    }

    async  clickonFurtherButton(){
        await this.clickfurther.click();
    }
    async  clickonHouseebutton(){
        await this.housebuuton.click();
    }

    async  clickonSize(){
        await this.size.isVisible();
        await this.size.click();
    }
    async  clickonPostalcode(){
        await this.postalCode.click();
    }
    async  clickonCitySelection(){
        await this.postalcode_city_selection.click();
    }
    async  clickonEcotariff(){
        await this.ecotariff.click();
    }
    async  choseGender(){
        await this.gassConnectionForm_Salutation.click();
    }
    async  fillFirstname(FirstName){
        await this.gassConnectionForm_firstName.fill(FirstName);
    }
    async  fillLasttname(LastName){
        await this.gassConnectionForm_lastName.fill(LastName);
    }
    async  fillDay(Day){
        await this.gassConnectionForm_dateOfbirth_day.fill(Day);
    }
    async  fillMonth(Month){
        await this.gassConnectionForm_dateOfbirth_month.fill(Month);
    }
    async  fillYear(Year){
        await this.gassConnectionForm_dateOfbirth_year.click();
        await this.gassConnectionForm_dateOfbirth_year.fill(Year);
    }
    async  fillStreetName(){
        await this.gassConnectionForm_Street.click();
        await this.gassconnectionchoseaddress.click();
    }
    async  fillHouseNumber(House){
        await this.gassConnectionForm_house.fill(House);
    }
    async  fillPhoneNumber(PhoneNumber){
        await this.gassConnectionForm_phoneNumber.fill(PhoneNumber);
    }
    async  ibanNumber(Iban){
        await this.iban.fill(Iban);
    }
    async  autoSignaturebutton(){
        await this.autoSignature.click();
    }
    async  Confirm(){
        await this.confirmButton.click();
    }
}