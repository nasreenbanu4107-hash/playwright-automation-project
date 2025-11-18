import {test,expect} from '@playwright/test';

// Verify Product Search Functionality //

test (' product search functionality works correctly', async ({page})=>{

    //navigate to the amazon homepage//

    await page.goto('https://www.amazon.in/');
    
    const searchbox=await page.locator('#twotabsearchtextbox');

    //search the product//

    await searchbox.fill('iphone 15');

    const searchbutton=await page.locator('#twotabsearchtextbox');

    await searchbutton.press('Enter');

    await page.waitForTimeout(3000);

    //verify the product title//

    const producttitle=await page.locator(('div.s-result-list-placeholder.aok-hidden.sg-row'));
    
        const count=await producttitle.count();

        await page.waitForTimeout(3000);

        await page.screenshot({ path: 'screenshot.png', fullPage: true });

        //verify the product count//

        console.log(`total products found: ${count}`);

        const product=(page.locator('h2').filter({ hasText: 'Apple iPhone 15 (128 GB) - Black' }));
        
        console.log ('Apple iPhone 15 (128 GB) - Black);');

    const productcount: number=await product.count();

    await page.waitForTimeout(5000);

    await page.screenshot({ path: 'screenshot.png', fullPage: true });


});
