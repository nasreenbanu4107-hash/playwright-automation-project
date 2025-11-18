/*import {test,expect} from '@playwright/test';

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

// validate successfull navigation to the homepage//

    await expect(page.locator('#nav-link-accountList-nav-line-1')).toHaveText(/Hello, Nasreen/);

    await page.waitForTimeout(5000);


//search the product//

    await page.locator('#twotabsearchtextbox').fill('warmth by rithvik singh');

await page.locator('#nav-search-submit-button').click();

    await page.waitForTimeout(2000);

    //click the first item//

const firstitem=page.locator("//span[contains(text(),'Warmth: Words for Anyone Trying to Move on | Bests')]");

await firstitem.click();

//add to cart//

await page.locator("span.nav-cart-icon.nav-sprite").click();

const checkcart=page.locator('#nav-cart-count');

await checkcart.click();

//verify cart count update//

await page.locator('#nav-cart').click();

await page.waitForTimeout(3000);



//verify item is listed//

await page.locator('#sc-active-items-header');

await expect (page.locator('h2:has-text("Shopping Cart")')).toBeVisible();

// go to the cart//

await page.locator('#activeCartViewForm').click();

//proceed to buy//

await page.locator("input[value='Proceed to checkout']").click();

//validate address & payment page/