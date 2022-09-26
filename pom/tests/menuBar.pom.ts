import {Page, expect} from '@playwright/test';


export class menuBar {

  linkToNewShowcase = this.page.locator('#menu-posts-wp-nc-google-panel');
  linkAddGooglePanels = this.page.locator('[href="post-new.php?post_type=wp-nc-google-panel"]');
  linkAllGooglePanels = this.page.locator('[href="edit.php?post_type=wp-nc-google-panel"]')
  linkPreviewGooglePanels = this.page.locator('[href="edit.php?post_type=wp-nc-google-panel&page=previews_list"]')

  constructor(public readonly page: Page) { }

  async goToAddPanel(){
    await this.linkToNewShowcase.click();
    await this.linkAddGooglePanels.click();
  }

  async goToAllGooglePanels(){
    await this.linkAllGooglePanels.click();
  }

  async goToAllPreviewPanels(){
    await this.linkToNewShowcase.click();
    await this.linkPreviewGooglePanels.click();
  }

  



}
