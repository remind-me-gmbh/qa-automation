const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

export class RegisterPage {

    constructor(page) {
        this.page = page;
        this.loginbutton = page.locator('//span[text()="Einloggen"]');
        this.submit = page.locator('//button[@type="submit"]');
        this.title = page.locator('//label[text()="Passwort eingeben"]');
        this.emailtitle = page.locator('//label[text()="Ihre E-Mail"]');
        this.email = page.locator('//input[@placeholder="E-Mail-Adresse"]');
        this.password = page.locator('(//input[@placeholder="Passwort"])[1]');
        this.confirmpassword = page.locator('(//input[@type="password"])[2]');
        this.clickfurther = page.locator('//button[text()="Weiter"]');
        this.emailError = page.locator('//div[text()="Ungültige E-Mail-Adresse."]');
        this.passError = page.locator('//div[text()="Ihre Passwörter stimmen nicht überein."]');
    }

    async gotoremindme(){
        const { baseURL } = this.page.context()._options;
       // await this.page.goto(`${baseURL}`);
        await this.page.goto('https://www.remind.me/');
        // Function to accept cookies
        const acceptCookiesButton = await this.page.waitForSelector('(//button[text()="Alle Akzeptieren"])');
        if (acceptCookiesButton) {
        await acceptCookiesButton.click();
    }
        
    }

    async userRegsiter(randomEmail, Password,ConfirmPassword){
        await this.loginbutton.click();
        await this.email.fill(randomEmail);
        await this.clickfurther.click();
        await this.password.fill(Password);
        await this.confirmpassword.fill(ConfirmPassword);
        await this.loginbutton.click();
        //await expect(this.myaccount).toBeVisible();
    }

    async emailValidation(invalidEmail){
        await this.loginbutton.click();
        await this.email.fill(invalidEmail);
        await this.emailtitle.click();
        await expect(this.emailError).toBeVisible();
    }
    async passwordValidation(randomEmail, Password,invalidConfirmpassword){
        await this.loginbutton.click();
        await this.email.fill(randomEmail);
        await this.clickfurther.click();
        await this.password.fill(Password);
        await this.confirmpassword.fill(invalidConfirmpassword);
        await this.title.click();
        await expect(this.passError).toBeVisible();
    }


}