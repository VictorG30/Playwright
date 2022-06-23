import {Page, expect} from '@playwright/test';
import {test} from '@playwright/test'



export class addGooglePanelPage {

  closeModal = this.page.locator('[aria-label="Close dialog"]')
  activateSources = this.page.locator('[aria-label="NC Feed Sources"]')
  eyeInformation = this.page.locator('.show-data-modal-btn')
  inputArticleUrl = this.page.locator('[data-input-type="ssLink"]')
  inputPanelTitle = this.page.locator('[data-input-type="ssPanelTitle"]')
  btnPublish = this.page.locator('.editor-post-publish-panel__toggle')
  btnPublishSB = this.page.locator('.editor-post-publish-button.editor-post-publish-button__button')
  imagePreview = this.page.locator('.panel-media-img')
  successMessage = this.page.locator('.components-notice.is-success.is-dismissible')


  constructor(public readonly page: Page) { }

  async dismissModal(){
    await this.closeModal.click();
    await this.activateSources.click();

  }

  async fillURLandEnter(url){
    await this.page.locator('.show-data-modal-btn').first().isVisible();
    await this.page.locator('[data-input-type="ssLink"]').click();
    await this.page.locator('[data-input-type="ssLink"]').fill(url);
    await this.page.keyboard.press('Enter');
    await this.imagePreview.click();

  }

  async fillPanelTitle(){
    await this.inputPanelTitle.fill('Panel Title')

  }

  async fillBullets(){
    const items = await this.page.locator('[data-input-type="ssBullet"]');
    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).fill('Bullet' + i);
  }
  }

  async publishPanel(){
    await this.btnPublish.click();
    await this.btnPublishSB.click();

  }

  async verifyIfPanelIsPublished(){
    await this.successMessage.click();
    await this.successMessage.isVisible();


  }



}


