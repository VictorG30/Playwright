import {test, expect} from '@playwright/test'
import { authenticator } from 'otplib';



test.describe.parallel('Visual automation test', () => {
  
  
  test.only('@NS Check add google panels is loading elements 1', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })
  

  test('@NS Check add google panels is loading elements 2', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })
        
  test('@NS Check add google panels is loading elements 3', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })

  test('@NS Check add google panels is loading elements 4', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })

  test('@NS Check add google panels is loading elements 5', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })

    test('@NS Check add google panels is loading elements 6', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })
  

  test('@NS Check add google panels is loading elements 7', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })
        
  test('@NS Check add google panels is loading elements 8', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })

  test('@NS Check add google panels is loading elements 9', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })

  test('@NS Check add google panels is loading elements 10', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })

  test('@NS Check add google panels is loading elements 11', async ({ page }) => {
    const timeOut = 20000 ;
    const url = 'https://ncu-newspress-gns.go-vip.net/wp-admin'
    const secret = 'FY7FUK3WERSGO4DFOVEUWX3RMJMDMPCL';
    const token = authenticator.generate(secret);

    await page.goto(url);
    // await page.locator('.jetpack-sso-toggle.wpcom').click({ timeout: timeOut  });
    // await page.locator('#user_login').fill('admin@test.com');
    // await page.locator('#user_pass').fill('admin');
    // await page.locator('#wp-submit').click({ timeout: timeOut  });
    // await page.locator('#authcode').fill(token);
    // await page.locator('#submit').click({ timeout: timeOut  });
    // await page.locator('.with-avatar').isVisible()
    await page.goto('https://ncu-newspress-gns.go-vip.net/wp-admin/post-new.php?post_type=wp-nc-google-panel');

    await page.locator('[aria-label="Close dialog"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/');
    await page.keyboard.press('Enter');
    await page.locator('[src="https://content.capi-stage.newscorp.com/images/f92edbe31756c9eb1f6b87d1e5dc4c48?combo2to1=1200"]').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssPanelTitle"]').fill('Created by Artillery');
    await page.locator('[data-input-type="ssBullet"]').first().fill('Bullet 1');
    await page.locator('[data-input-type="ssBullet"]').last().fill('Bullet 2');
    await page.locator('.editor-post-publish-panel__toggle').click({ timeout: timeOut  });
    await page.locator('[data-input-type="ssOverline"]').fill('Kicker')
    await page.locator('.editor-post-publish-button.editor-post-publish-button__button').click({ timeout: timeOut  });
    await page.locator('.components-notice.is-success.is-dismissible').click({ timeout: timeOut  });
     
  })

})
