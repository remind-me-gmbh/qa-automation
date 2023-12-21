import { test } from '@playwright/test';
import { Gassjourney } from '../pages/OfferCreation/GasOffer/gas';
import { getRandomEmail } from '../util/common';
import data from '../util/userdata.json';


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
        //await gas.clickonOnePersonSelection();
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


 });