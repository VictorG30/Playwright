import {Page, expect} from '@playwright/test';


export class menuBar {

  linkToNewShowcase = this.page.locator('#menu-posts-wp-nc-google-panel').first()
  linkAddGooglePanels = this.page.locator('[href="post-new.php?post_type=wp-nc-google-panel"]').first()
  linkAllGooglePanels = this.page.locator('[href="edit.php?post_type=wp-nc-google-panel"]')
  linkPreviewGooglePanels = this.page.locator('[href="edit.php?post_type=wp-nc-google-panel&page=wp_nc_previews_list"]').first()

  constructor(public readonly page: Page) { }

  async goToAddPanel(){
    await this.linkToNewShowcase.click();
    await this.linkAddGooglePanels.click();
  }

  async goToAllGooglePanels(){
    await this.linkAllGooglePanels.click({force:true});
  }

  async goToAllPreviewPanels(){
    await this.linkToNewShowcase.click();
    await this.linkPreviewGooglePanels.click();
  }

  async catchErrors(){
    this.page.on("console", message => {
      if (message.type() === "error") {
        console.log(message.location().url)
          expect(message.location().url).not.toContain('ncu-newspress-gns')            
      }
    })     
  }
  



}
