import {test,expect} from '@playwright/test';

// Verfiy Homepage Loads Successfully //

test (' homepage loads successfully', async ({page})=>{

    await page.goto('https://www.amazon.in/');

await expect (page.locator('#nav-logo-sprites')).toBeVisible();

await expect (page).toHaveTitle(/Online Shopping site in India/);

});

// Verify Search Functionality //

test (' search functionality works correctly', async ({page})=>{

    await page.goto('https://www.amazon.in/');

    await page.locator('#twotabsearchtextbox').fill('warmth by rithvik singh');

    await page.locator('#nav-search-submit-button').click();
    
    await page.waitForTimeout(3000);

    await expect (page).toHaveTitle(/warmth by rithvik singh/);
});




