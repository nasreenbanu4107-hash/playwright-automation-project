import {test,expect} from '@playwright/test';

// Verify Product Search Functionality //

test(' Add to cart functionality', async ({page})=>{

    //go to amazon homepage//

    await page.goto('https://www.amazon.in/');
    
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

await expect (checkcart).toHaveText('0');

//verify cart count update//

await page.locator('#nav-cart').click();


//verify item is listed//

await page.locator('#sc-active-items-header').isVisible();


});

