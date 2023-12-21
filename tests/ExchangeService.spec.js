import {test}   from '@playwright/test';
import {ExchangeServicesJourney} from '../pages/ChangesService/Exchange';
import data from '../util/userdata.json';

test.describe(' Exchange Servic Gas', () => {
    test(' Verify User can create the offer Creation of Gass conenction', async ({ page }) => {
        const exchange = new ExchangeServicesJourney(page);
        await exchange.gotoremindme();
        await exchange.loginUser(data.Email,data.Password);
        await exchange.exchangeOfferView();
        await exchange.powerChange();
        await exchange.clickoncheaperProvider();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.clickonZipcode(data.Zipcode);
        await exchange.clickonAreaSelection();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.choseGender();
        await exchange.fillFirstname(data.FirstName);
        await exchange.fillLasttname(data.LastName);
        await exchange.fillDay(data.Day);
        await exchange.fillMonth(data.Month);
        await exchange.fillYear(data.Year);
        await exchange.fillStreetName(data.StreetName);
        await exchange.fillHouseNumber(data.House);
        await exchange.fillPhoneNumber(data.PhoneNumber);
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.ibanNumber(data.Iban);
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.autoSignaturebutton();
        await exchange.clickonFurtherButton();
    });

    

});
