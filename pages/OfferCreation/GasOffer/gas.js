
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const { keyboard } = require('@playwright/test');



export class Gassjourney {

    constructor(page) {
        this.page = page;
        this.acceptCookies = page.locator('(//font[text()="Accept all"])[2]');
        this.home_electricity = page.locator('(//font[text()="Electricity"])[2]');
        this.home_gas = page.locator('//span[text()="Gas"]');
        this.home_house = page.locator('(//span[text()="Haus"])');
        this.home_apartment = page.locator('(//span[text()="Wohnung"])');
        this.home_business = page.locator('(//span[text()="Gewerbe"])');
        this.home_checksavingbutton = page.locator('(//button[text()="Jetzt Sparpotential prüfen"])');
        this.home_onePerson_Selection_KWH = page.locator('//span[text()="50m²"]');
        this.home_onePerson_Selection_KWH_Input = page.getByText('//input[@value="1500"]');
        this.home_postalCode = page.locator('//input[@placeholder="z.B. 10115"]');
        this.home_areaSelectionfeild = page.getByPlaceholder('z. B. Berlin');
        this.home_postalcode_city_selection = page.getByRole('option', { name: 'Berlin / Mitte' });
        this.home_clickfurther = page.locator('//button[@type="submit"]');
        this.home_currentservice_provider = page.locator('//input[@type="search"]'); 
        this.home_currentservice_options = page.locator('(//div[@role="option"])[2]'); 
        this.home_alltariff_ = page.locator('//font[text()="All tariffs"]');
        this.home_ecotariff= page.locator('//span[text()="Alle Tarife"]');
        this.home_enterEmail = page.locator('//label[text()="Ihre E-Mail"]/following::input');
        this.home_password = page.locator('(//input[@placeholder="Passwort"])[1]');
        this.home_passwordConfirm = page.locator('(//input[@placeholder="Passwort"])[2]');
    }

    async gotoremindme(){
        const { baseURL } = this.page.context()._options;
        //await this.page.goto(`${baseURL}`);
        await this.page.goto('https://www.remind.me/');
        
        // Function to accept cookies
            const acceptCookiesButton = await this.page.waitForSelector('(//button[text()="Alle Akzeptieren"])');
            if (acceptCookiesButton) {
            await acceptCookiesButton.click();
        }}
    async  clickonGasButton(){
        await this.home_gas.isVisible();
        await this.home_gas.click();
    }
    
    async  clickonHouseButton(){
        await this.home_house.click();
    }
    async  clickonApartmentButton(){
        await this.home_apartment.click();
    }
    async  clickonFurtherButton(){
        await this.home_clickfurther.click();
    }
    async  clickonBusinessButton(){
        await this.home_business.click();
    }
    async  clickonCheckSavingButton(){
        await this.home_clickfurther.click();
    }
    async  clickonCheckSavingButton(){
        await this.home_clickfurther.click();
    }
    async  clickonOnePersonSelection(){
        await this.home_onePerson_Selection_KWH.click();
    }
    async  clickonZipcode(Zipcode){
        await this.home_postalCode.fill(Zipcode);
        await this.home_postalCode.press('Enter');
    }
    async clickonAreaSelection() {
        await this.home_areaSelectionfeild.click();
        await this.home_postalcode_city_selection.click();
    }

    async clickonTariff() {
        await this.home_ecotariff.click();
    }
    
    async enterEmail(randomEmail){
        await this.home_enterEmail.fill(randomEmail);
    }

    async enterPassword(password){
        await this.home_password.fill(password);
    }
    async enterConfirmPassword(confirmPassword){
        await this.home_passwordConfirm.fill(confirmPassword);
    }
}