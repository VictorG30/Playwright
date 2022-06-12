import {Page, expect} from '@playwright/test';


export class menuBar {

  linkToNewShowcase = this.page.locator('#menu-posts-wp-nc-google-panel');
  linkAddGooglePanels = this.page.locator('[href="post-new.php?post_type=wp-nc-google-panel"]');

  constructor(public readonly page: Page) { }

  async goToAddPanel(){
    await this.linkToNewShowcase.click();
    await this.linkAddGooglePanels.click();

  }





}
