import { test, expect } from "@playwright/test";
import { RegisterScreen } from "./RegisterScreen";

test.use({
    launchOptions: { slowMo : 1100},
})

test("adding 2 products makes the checkout  appear 2 items", async ({ page }) => {
    const shop = new RegisterScreen(page);

    await shop.opensite();
    await shop.fill();
    await shop.Shoplink.click();

    await shop.Cardiphone.click();
    await shop.Cardnokia.click();
    
    await shop.Checkbutton.scrollIntoViewIfNeeded();

    await expect(shop.Checkbutton).toContainText("Checkout ( 2 )");
});
