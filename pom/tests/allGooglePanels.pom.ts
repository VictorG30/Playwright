import {Page, expect} from '@playwright/test';


export class allGooglePanels {

  inputSearchPanels = this.page.locator('#post-search-input');
  btnSearchPanels = this.page.locator('#search-submit');
  selectBulkOptions = this.page.locator('#bulk-action-selector-top')
  btnApply = this.page.locator('#doaction')
  chkboxAll = this.page.locator('#cb-select-all-1')
  column = this.page.locator('.panel_type.column-panel_type').first()
  notFoundMsg = this.page.locator('text="Not Found"')


  constructor(public readonly page: Page) { }

  async searchPanels(text){
    await this.inputSearchPanels.fill(text);
    await this.btnSearchPanels.click();
    await this.column.waitFor();

  }

  async deletePanel(){
    await this.page.waitForLoadState('networkidle')
    await this.chkboxAll.click();
    await this.selectBulkOptions.selectOption('trash');
    await this.btnApply.click()
  }

  async verifyDeletePanel(){
    await this.notFoundMsg.isVisible
  }




  



}
