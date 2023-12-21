import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import data from '../util/userdata.json';


test.describe(' Login Sceanrio', () => {
    test(' Verify if User has valid email and password', async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.gotoremindme();
        await Login.userLogin(data.Email,data.Password)
    });

    test(' Verify if User has invalid email', async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.gotoremindme();
        await Login.emailValidation(data.invalidEmail);
    });

    test(' Verify if User has invalid pass', async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.gotoremindme();
        await Login.passwordValidation(data.Email, data.invalidPass);
    });
});
