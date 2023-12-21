import  test   from '@playwright/test';
import  {Electricityjourney} from '../pages/OfferCreation/ElectricityOffer/electricity';
import  data from '../util/userdata.json';
import { getRandomEmail } from '../util/common';

test.describe(' Offer creation Electricity', () => {
    test(' C1 -- Verify User Ability to Successfully Select the Gas Button.', async ({ page }) => {
        const elec = new Electricityjourney(page);
        await elec.gotoremindme();
        await elec.clickonElectricityButton();
    });

    test(' C2 -- Verify User Ability to Successfully Select the "HOUSE" Option After Selecting the "GAS" Button', async ({ page }) => {
        const elec = new Electricityjourney(page);
        await elec.gotoremindme(); 
        await elec.clickonHouseButton();
    });

    test(' C3 -- Verify Visibility and Click-ability of the "Check your savings potential" Button ', async ({ page }) => {
        const elec = new Electricityjourney(page);
        await elec.gotoremindme(); 
        await elec.clickonCheckSavingButton();
    });

    test(' C26 -- Verify Users Ability to Successfully Select the "Business" Option After Selecting the "Gas" Button ', async ({ page }) => {
        const elec = new Electricityjourney(page);
        await elec.gotoremindme();
        await elec.clickonElectricityButton();
        await elec.clickonBusinessButton();
        await elec.clickonCheckSavingButton();
    });

    test(' C24 -- Verify User Ability to Successfully Select the "Apartment" Option After Selecting the "Gas" Button  ', async ({ page }) => {
        const elec = new Electricityjourney(page);
        await elec.gotoremindme();
        await elec.clickonElectricityButton();
        await elec.clickonApartmentButton();
        await elec.clickonCheckSavingButton();
    });

    test(' C5 -- Verify Appearance of "Your Current Consumption" Form After Selecting "House"  ', async ({ page }) => {
        const elec = new Electricityjourney(page);
        await elec.gotoremindme();
        await elec.clickonElectricityButton();
        await elec.clickonApartmentButton();
        await elec.clickonCheckSavingButton();
    });

    test(' C6 -- Verify if user can select the Multiple"Persons" Icon for Electricity consumption. ', async ({ page }) => {
        const elec = new Electricityjourney(page);
        await elec.gotoremindme();
        await elec.clickonElectricityButton();
        await elec.clickonApartmentButton();
        await elec.clickonCheckSavingButton();
        //await elec.clickonOnePersonSelection();
        await elec.clickonZipcode(data.Zipcode);
        await elec.clickonAreaSelection();
    });


    test(' C7 -- Electricity -> Annual Consumption ', async ({ page }) => {
        const elec = new Electricityjourney(page);
        const randomEmail = getRandomEmail();
        await elec.gotoremindme();
        await elec.clickonElectricityButton();
        await elec.clickonApartmentButton();
        await elec.clickonCheckSavingButton();
        await elec.clickonZipcode(data.Zipcode);
        await elec.clickonAreaSelection();
        await elec.clickonFurtherButton();
        await elec.clickonTariff();
        await elec.clickonFurtherButton();
        await elec.enterEmail(randomEmail);
        await elec.clickonFurtherButton();
        await elec.enterPassword(data.Password);
        await elec.enterConfirmPassword(data.ConfirmPassword);
        await elec.clickonFurtherButton();
    });

 });