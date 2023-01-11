import {Page, expect} from '@playwright/test';


export class allGooglePanels {

  inputSearchPanels = this.page.locator('#post-search-input');
  btnSearchPanels = this.page.locator('#search-submit');
  selectBulkOptions = this.page.locator('#bulk-action-selector-top')
  btnApply = this.page.locator('#doaction')
  chkboxAll = this.page.locator('#cb-select-all-1')
  column = this.page.locator('.row-title').first()
  notFoundMsg = this.page.locator('text="Not Found"')
  labelSubtitle = this.page.locator('.subtitle')


  constructor(public readonly page: Page) { }

  async searchPanels(text){
    await this.page.waitForLoadState('networkidle')
    await this.inputSearchPanels.fill(text);
    await this.btnSearchPanels.click();
    await this.page.waitForLoadState('networkidle')
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.waitForLoadState('load')
    await expect(this.column).toContainText(text)


  }

  async deletePanel(){
    await this.page.waitForLoadState('networkidle')
    await this.chkboxAll.click();
    await this.selectBulkOptions.selectOption('trash');
    await this.btnApply.click()
  }

  async verifyDeletePanel(){
    await expect(this.notFoundMsg).toBeVisible()
  }




  



}
