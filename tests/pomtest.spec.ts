import {test, expect} from '@playwright/test';

import {Loginpage} from '../pages/loginpage';
import {hompepage} from '../pages/homepage';
import {cartpage} from '../pages/cartpage';

test('End to End Purchase Flow using POM', async ({page}) => {

    await page.goto('https://www.demoblaze.com/');

    //login page//

    const loginpage = new Loginpage(page);
    await loginpage.clickLoginLink();

    //await page.pause()//

    await loginpage.enterUserName("nasreen");
    await loginpage.enterpassword("123");
    await loginpage.clickOnLoginButton();

    //await loginpage.performLogin("nasreen","123");

    //pom page//

const HomePage= new hompepage(page);
await HomePage.addProductToCart("Samsung galaxy s6");
await page.waitForTimeout(2000);
await HomePage.gotocart();
await page.waitForTimeout(2000);

//cart page//

const Cartpage= new cartpage(page);
const isproductincart= await ("Samsung galaxy s6");
await expect(isproductincart).toBeTruthy();

});

