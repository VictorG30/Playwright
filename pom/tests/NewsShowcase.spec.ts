import {test, expect} from '@playwright/test'
import { authenticator } from 'otplib';
import {loginPage} from './loginPage.pom';



test.describe.parallel('Visual automation test', () => {
  
  
  test.only('@NS Check add google panels is loading elements 1', async ({ page }) => {

    const LG = new loginPage(page);
    LG.gotoURL()
    LG.Login("admin@test.com","admin")
     
    // await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    // await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    // await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    // await page.keyboard.press('Enter');
    // await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    // await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    // await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    // await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    // await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    // await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    // await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    // await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })

})
