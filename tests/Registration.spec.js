import { test } from '@playwright/test';
import { RegisterPage } from '../pages/register';
import data from '../util/userdata.json';
import { getRandomEmail } from '../util/common';


test.describe(' Registration Sceanrio', () => {
    test(' Verify if User has valid email and password', async ({ page }) => {
        const regis = new RegisterPage(page);
        const randomEmail = getRandomEmail();
        await regis.gotoremindme();
        await regis.userRegsiter(randomEmail,data.Password,data.ConfirmPassword)
    });

    test(' Verify if User has invalid email', async ({ page }) => {
        const regis = new RegisterPage(page);
        await regis.gotoremindme();
        await regis.emailValidation(data.invalidEmail);
    });

    test(' Verify if User has invalid pass', async ({ page }) => {
        const regis = new RegisterPage(page);
        const randomEmail = getRandomEmail();
        await regis.gotoremindme();
        await regis.passwordValidation(randomEmail, data.Password , data.invalidConfirmpassword);
    });
});