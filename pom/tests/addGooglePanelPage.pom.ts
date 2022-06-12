import {Page, expect} from '@playwright/test';


export class addGooglePanelPage {

  closeModal = this.page.locator('[aria-label="Close dialog"]')
  activateSources = this.page.locator('[aria-label="NC Feed Sources"]')
  eyeInformation = this.page.locator('.show-data-modal-btn')
  inputArticleUrl = this.page.locator('[data-input-type="ssLink"]')

  constructor(public readonly page: Page) { }

  async dismissModal(){
    await this.closeModal.click();
    await this.activateSources.click();

  }

  async fillURLandEnter(){
    this.page.waitForLoadState()
    this.eyeInformation.first();
    this.inputArticleUrl.click()
    await this.page.fill('[data-input-type="ssLink"]', "https://www.barrons.com/articles/its-not-time-to-panic-about-recession-51649191274", { force: true });
    //this.inputArticleUrl.fill("https://www.barrons.com/articles/its-not-time-to-panic-about-recession-51649191274")
    this.inputArticleUrl.press("{enter}")
  }

  async dragAndDropArticles(){
    this.page.waitForSelector('.dashicon.dashicons.dashicons-visibility.show-data-modal-btn')
    this.page.dragAndDrop(".nc-feed-sources-sidebar-card",".components-drop-zone");
  }




}


