import {Page, expect} from '@playwright/test';


export class allPreviewPanels {

  inputSearchPanels = this.page.locator('[placeholder="Search panels"]');
  btnSearchPanels = this.page.locator('.dashicons.dashicons-search');
  labelTitle = this.page.locator('.panel-card-title').first()


  constructor(public readonly page: Page) { }

  async searchPanels(text){
    await this.inputSearchPanels.fill(text);
    await this.btnSearchPanels.click();
    await this.page.waitForLoadState('networkidle')
    await this.page.waitForLoadState('load')
    await this.labelTitle.waitFor();

  }

  async verifyPanelName(text){
    await expect(this.labelTitle).toBeVisible()


  }
  



}
