import {test}   from '@playwright/test';
import {YourOfferJourney} from '../pages/ChangesService/YourOffer';
import data from '../util/userdata.json';

test.describe(' Change Servic Gas', () => {
    test(' Verify User can create the offer Creation of Gass conenction', async ({ page }) => {
        const exchange = new YourOfferJourney(page);
        await exchange.gotoremindme();
        await exchange.loginUser(data.Email,data.Password);
        await exchange.clickonViewOffer();
        await exchange.clickonofferDetails();
        await exchange.clickonCreateFreeExchange();
        await exchange.clickoncheaperProvider();
        await exchange.clickonFurtherButton();
        await exchange.clickonHouseebutton();
        await exchange.clickonFurtherButton();
        //await exchange.clickonSize();
        await exchange.clickonFurtherButton();

        
        await exchange.clickonFurtherButton();
        await exchange.clickonEcotariff();
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
