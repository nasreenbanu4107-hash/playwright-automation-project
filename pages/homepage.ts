import { Page, Locator} from '@playwright/test';

export class hompepage{
    private readonly page:Page;
    private readonly productListLocator:Promise<Array<Locator>>;
    private readonly addtoCartButtonLocator:Locator;
    private readonly cartLink:Locator;

    constructor(page:Page)

    {
        this.page=page;
        this.productListLocator=this.page.locator('div#tbodyid div.card h4.card-title a').all();

        this.addtoCartButtonLocator=this.page.locator(('a:has-text("Add to cart")'));

        this.cartLink=this.page.locator('#cartur');

    }

        async addProductToCart(productName:string):Promise<void> {
            const productElements=this.productListLocator;

            for (const product of  await productElements) {
                const productText=await product.textContent();

                if (productText?.trim() ===productName) {

                    await product.click();

                    break;
                }
                }
            
                this.page.once('dialog', async dialog=>{

            if (dialog.message().includes('added')){
                await dialog.accept();
            }
                });

                await this.addtoCartButtonLocator.click();
                
            }

            async gotocart(){
                await this.cartLink.click();
            }
        }