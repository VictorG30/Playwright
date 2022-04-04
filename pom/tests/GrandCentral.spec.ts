import {test, expect} from '@playwright/test'
import {homePage} from './homePage.pom';


test.describe.parallel('Visual automation test', () => {

    test.beforeEach(async ({page}) => {
        const HomePage = new homePage(page);
        await HomePage.gotoURL();

      });

    test('@GC categories should be visible', async ({ page }) => {
        const HomePage = new homePage(page);
        await HomePage.chekIfCategoriesAreDisplayed();
    })

    test('@GC Player video should be visible', async ({ page }) => {
        const HomePage = new homePage(page); 
        await HomePage.searchVideo('fashion')
        await HomePage.goToVideo()
        await HomePage.chekIfVideoPlayesIsDisplayed()
        
    })

    test('@GC Pause video', async ({ page }) => {
        const HomePage = new homePage(page); 
        await HomePage.searchVideo('fashion')
        await HomePage.goToVideo()
        await HomePage.pauseVideo()

    })

    test('@GC Pause and Play video', async ({ page }) => {
        const HomePage = new homePage(page); 
        await HomePage.searchVideo('fashion')
        await HomePage.goToVideo()
        await HomePage.pauseVideo()
        await HomePage.pauseVideo()
        await page.locator('button:has-text("Play")').nth(1).click();
    })


})
