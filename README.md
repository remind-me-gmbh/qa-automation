# PlaywrightUItest-remindme
# Playwright Page Object Model Automation

This repository showcases a remind.me automation framework developed using Playwright, inspired by the teachings of Ahmed Ali. The framework adheres to the Page Object Model (POM) methodology and is built using Node.js with JavaScript.

## Tools & Technologies

- Node.js
- Visual Studio Code
- JavaScript

## Getting Started

To leverage this framework for your testing endeavors, follow these steps:

1. **Clone the Repository:**
   Download the repository or clone it using the following command:
   ```bash
    git clone https://github.com/Ahmedremind/PlaywrightUItest-remindme/tree/main/PlaywrightUItest-master.git
   ```

2. **Check Node.js Version:**
   Verify that Node.js a is installed on your system by running:
   ```bash
   node -v
   ```

3. **Install Dependencies:**
   Open your terminal/cmd, navigate to the project folder, and run:
   ```bash
   npm ci
   ```
   This command installs all the necessary libraries specified in the package.json file.

4. **Run Tests:**
   Execute the tests using the Playwright test runner:
   ```bash
   npx playwright test
   ```

## Tutorial Steps

This framework was crafted based on Ahmed Ali's tutorial on building a Playwright Page Object Model project. Below is an overview of the steps:

1. **Set Up a New Project:**
   Establish a new Node.js project and initialize it with a package.json file using:
   ```bash
   npm init -y
   ```

2. **Install Playwright:**
   Install Playwright and set up the project by executing:
   ```bash
   npm init playwright@latest
   ```

3. **Generate Sample Test:**
   Create a sample login test by recording interactions with the application through:
   ```bash
   npx playwright codegen
   ```

4. **Page Objects:**
   Organize your project by creating a "pages" directory to host all page objects. Define classes for each page with element locators and action methods.

5. **Utilize Page Objects:**
   In your test files, import the relevant page classes, create instances, and use the methods defined in those classes to interact with the application.

## Example Test: gassOffercreation.spec.js

```javascript
import { test } from '@playwright/test';
import { Gassjourney } from '../pages/OfferCreation/GasOffer/gas';
import data from '../util/data.json';
import { getRandomEmail } from '../util/common';

test.describe(' Offer creation Gas', () => {
    test(' C1 -- Verify User Ability to Successfully Select the Gas Button.', async ({ page }) => {
        const gas = new Gassjourney(page);
        await gas.gotoremindme();
        await gas.clickonGasButton();
    });

    test(' C2 -- Verify User Ability to Successfully Select the "HOUSE" Option After Selecting the "GAS" Button', async ({ page }) => {
        const gas = new Gassjourney(page);
        await gas.gotoremindme(); 
        await gas.clickonHouseButton();
    });

    test(' C3 -- Verify Visibility and Click-ability of the "Check your savings potential" Button ', async ({ page }) => {
        const gas = new Gassjourney(page);
        await gas.gotoremindme(); 
        await gas.clickonCheckSavingButton();
    });

    test(' C26 -- Verify Users Ability to Successfully Select the "Business" Option After Selecting the "Gas" Button ', async ({ page }) => {
        const gas = new Gassjourney(page);
        await gas.gotoremindme();
        await gas.clickonGasButton();
        await gas.clickonBusinessButton();
        await gas.clickonCheckSavingButton();
    });

    test(' C24 -- Verify User Ability to Successfully Select the "Apartment" Option After Selecting the "Gas" Button  ', async ({ page }) => {
        const gas = new Gassjourney(page);
        await gas.gotoremindme();
        await gas.clickonGasButton();
        await gas.clickonApartmentButton();
        await gas.clickonCheckSavingButton();
    });

    test(' C5 -- Verify Appearance of "Your Current Consumption" Form After Selecting "House"  ', async ({ page }) => {
        const gas = new Gassjourney(page);
        await gas.gotoremindme();
        await gas.clickonGasButton();
        await gas.clickonApartmentButton();
        await gas.clickonCheckSavingButton();
    });

    test(' C6 -- Verify if user can select the Multiple"Persons" Icon for gas consumption. ', async ({ page }) => {
        const gas = new Gassjourney(page);
        await gas.gotoremindme();
        await gas.clickonGasButton();
        await gas.clickonApartmentButton();
        await gas.clickonCheckSavingButton();
        await gas.clickonOnePersonSelection();
        await gas.clickonZipcode(data.Zipcode);
        await gas.clickonAreaSelection();
    });

    test(' C7 -- Gass -> Annual Consumption ', async ({ page }) => {
        const gas = new Gassjourney(page);
        const randomEmail = getRandomEmail();
        await gas.gotoremindme();
        await gas.clickonGasButton();
        await gas.clickonApartmentButton();
        await gas.clickonCheckSavingButton();
        await gas.clickonOnePersonSelection();
        await gas.clickonZipcode(data.Zipcode);
        await gas.clickonAreaSelection();
        await gas.clickonFurtherButton();
        await gas.clickonTariff();
        await gas.clickonFurtherButton();
        await gas.enterEmail(randomEmail);
        await gas.clickonFurtherButton();
        await gas.enterPassword(data.Password);
        await gas.enterConfirmPassword(data.ConfirmPassword);
        await gas.clickonFurtherButton();
    });


 });```

## Example Page Object: GassJourney.js

```javascript
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
        await this.page.goto(`${baseURL}`);
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
```

Author: Ahmed Ali

