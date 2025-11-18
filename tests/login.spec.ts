import {test,expect} from '@playwright/test';

// Verify Login Functionality //

test('login functionality works correctly', async ({page}) => {

//Navigate to the homepage//

    await page.goto('https://www.amazon.in/');

//Login//

    await page.locator('#nav-link-accountList-nav-line-1').click();

    //Enter valid email id//

    await page.locator('#ap_email_login').fill('nasreenahmed1771@gmail.com');

    await page.locator('#continue').click();
    
    //Enter valid password//

    await page.getByLabel('Password').fill('nasreen@1771');

    await page.locator('#auth-signin-button').click();

// validate the text in the homepage//

    await expect(page.locator('#nav-link-accountList-nav-line-1')).toHaveText(/Hello, Nasreen/);

    await page.waitForTimeout(5000);

});

// Verify Login Functionality with Invalid Credentials //

test('login functionality with invalid credentials shows error', async ({page}) => {

    await page.goto('https://www.amazon.in/');

    await page.locator('#nav-link-accountList-nav-line-1').click();

    //enter invalid email//

    await page.locator('#ap_email_login').fill('nasreen123@gmail.com');

    await page.locator('#continue').click();

    await expect(page.locator('#nameofuser')).toContainText('Hello Nasreen');

    await page.screenshot ({ path: 'screenshot.png', fullPage: true })

    
    //enter invalid password//

    await page.getByLabel('Password').fill('wrongpassword');

    await page.locator('#auth-signin-button').click();

    await expect(page.locator('#auth-error-message-box')).toHaveText(/Your password is incorrect/);

    await page.waitForTimeout(5000);

    //await page.screenshot ({ path: 'screenshot.png', fullPage: true })

});
