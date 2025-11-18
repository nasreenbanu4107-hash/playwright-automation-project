import { Page, Locator} from '@playwright/test';

export class Loginpage
{
    private readonly page:Page;
private readonly loginLink:Locator;
private readonly UsernameInput:Locator;
private readonly PasswordInput:Locator;
private readonly Loginbutton:Locator;

constructor(page:Page)

    constructor(page:Page)
    {
        this.page=page;
        this.loginLink=this.page.locator("#login2");
        this.UsernameInput=this.page.locator("#loginusername");
        this.PasswordInput=this.page.locator("#loginpassword");
        this.Loginbutton=this.page.locator('button:has-text("Log in")')
    }

    async clickLoginLink(): Promise<void>
    {

        await this.loginLink;

    }
    

    async enterUserName(username:string): Promise<void>
 
{
    await this.loginLink.click();

    await this.UsernameInput.fill(username);

}

async enterpassword(password:string): Promise<void>
{

    await this.PasswordInput.fill(password);
}
async clickOnLoginButton()
{
    await this.Loginbutton.click();
}

async performLogin(username:string,password:string)
{
    await this.clickLoginLink();
    await this.enterUserName(username);
    await this.enterpassword(password);
    await this.clickOnLoginButton();

    await this.page.waitForTimeout(10000);
}




};