import {test,expect} from '@playwright/test';

// product page validation //

test (' product search functionality works correctly', async ({page})=>{

    //step-1 navigate to Amazon//

    await page.goto('https://www.amazon.in/');

    //search the product//
    
    const searchbox=await page.locator('#twotabsearchtextbox');

    await searchbox.fill('iphone 15');

    const searchbutton=await page.locator('#twotabsearchtextbox');

    await searchbutton.press('Enter');
    
    //click the first product//

    await page.locator("//h2[@aria-label='Sponsored Ad - Apple iPhone 15 (128 GB) - Black']").click();

    await page.waitForTimeout(3000);

    //validate Title//

    const productitle=await(page.locator("//span[@id='productTitle']"));

    console.log('Apple iPhone 15 (128 GB) - Black');

    //validate price//

    await expect(page.locator("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] span[class='a-price-whole']")).toBeVisible;

    //validate image section//

    await expect (page.locator('//img[@alt="Sponsored Ad - Apple iPhone 15 (128 GB) - Black"]')).toBeVisible();

    //Ratings / reviews

await page.locator('h2:has-text("Customer reviews"').click;

    //add to the cart & buy now buttons//

    const addtocart=page.getByRole('img', { name: 'Sponsored Ad - Apple iPhone 15 (128 GB) - Black' });

    await expect (addtocart).toBeTruthy();

    const buynow=page.locator('#buy-now-button');

    await expect (buynow).toBeTruthy();

    //product description / deatils//

    const productdetails=page.getByText('#prodDetails');

    await expect (productdetails).toBeTruthy();
    
    await page.waitForTimeout(5000);

    await page.screenshot({ path: 'screenshot.png', fullPage: true });

});

