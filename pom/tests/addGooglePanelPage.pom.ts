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
  inputHeadline = this.page.locator('[data-input-type="ssTitle"]')
  inputKicker = this.page.locator('[data-input-type="ssOverline"]')
  options = this.page.locator('.edit-post-header__settings [aria-label="Options"]')
  btnFullScrenMode = this.page.locator('.components-menu-item__item >> text=Fullscreen mode')
  dropDownTemplate = this.page.locator('.wp-block-nc-google-panel-list select')
  inputSummary = this.page.locator('[data-input-type="ssSummary"]')
  rBtnKicker = this.page.locator('.panel-field-radio [value="kicker"]')



  constructor(public readonly page: Page) { }

  async dismissModal(){
    await this.closeModal.click()
    await this.activateSources.click()
  }

  async activateFullScreenModel(){
    await this.options.click()
    await this.btnFullScrenMode.click()

  }

  async selectTemplate(value){
    await this.dropDownTemplate.selectOption(value)

  }

  async dragAndDropArticle(){    
    await this.page.waitForLoadState('networkidle')
    await this.page.locator('.show-data-modal-btn').first().isVisible();
    await this.page.dragAndDrop('.nc-feed-sources-sidebar-card:first-of-type','[for="Panel title"]');
    await this.inputHeadline.fill('Headline')
    await this.inputKicker.fill('')

  }

  async dragAndDropArticleRD(){    
    await this.page.waitForLoadState('networkidle')
    await this.page.locator('.show-data-modal-btn').first().isVisible();
    await this.page.dragAndDrop('.nc-feed-sources-sidebar-card:first-of-type','.data-fiels-droppable-zone nth(2)');
    // await this.page.dragAndDrop('.nc-feed-sources-sidebar-card:first-of-type','[for="Article URL"]:nth-of-type(2)');
    // await this.page.dragAndDrop('.nc-feed-sources-sidebar-card:first-of-type','[for="Article URL"]:nth-of-type(3)');
    await this.inputHeadline.fill('Headline')
    await this.inputKicker.fill('')

  }


  async fillURLandEnter(){
    // await this.page.locator('.show-data-modal-btn').first().isVisible();
    // await this.page.locator('[data-input-type="ssLink"]').click();
    // await this.page.locator('[data-input-type="ssLink"]').fill(url);
    // await this.page.keyboard.press('Enter');
    // await this.imagePreview.click();
    // await this.inputHeadline.fill('Headline')
    const url = 'https://www.marketwatch.com/story/lennar-corp-cl-a-stock-outperforms-competitors-on-strong-trading-day-01660251862-e23a0a8083e2'
    const items = await this.page.locator('[data-input-type="ssRaLink"]');
    const headLines = await this.page.locator('[data-input-type="ssRaTitle"]');
    const kickers = await this.page.locator('[data-input-type="ssRaOverline"]');
    const images = await this.page.locator('.ra-rigth');




    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).fill(url);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('networkidle')
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.waitForLoadState('load')
    await this.page.waitForSelector('.panel-field-loading-message',{state: "hidden"})
    await images.nth(i).click();
    await headLines.nth(i).fill('Headline');
    await kickers.nth(i).fill('Kicker');


    }
  }

  async cleanFields(){
    const headLines = await this.page.locator('[data-input-type="ssRaTitle"]');
    const kickers = await this.page.locator('[data-input-type="ssRaOverline"]');
    const images = await this.page.locator('.ra-rigth');

    for (let i = 0; i < await headLines.count(); i++) {
      

      await images.nth(i).click();
      await headLines.nth(i).fill('Headline');
      await kickers.nth(i).fill('Kicker');
  
  
      }

  }

  async fillArticle(){

    await this.page.locator('[data-input-type="ssLink"]').click()
    await this.page.locator('[data-input-type="ssLink"]').fill('https://www.thesun.ie/tv/9070443/love-island-casa-amor-mollie-cheyanne-jack-jazmine/')
    await this.page.locator('[data-input-type="ssMediaContent"]').fill('https://www.thesun.ie/tv/9070443/love-island-casa-amor-mollie-cheyanne-jack-jazmine/')
    await this.inputHeadline.fill('Headline')

  }

  async fillPanelTitle(title){
    await this.inputPanelTitle.fill(title)

  }

  async fillPanelTitleRD(){
    await this.page.locator('[data-input-type="rdPanelTitle"]').fill('Created by playwright')

  }

  async fillBullets(){
    const items = await this.page.locator('[data-input-type="ssBullet"]');
    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).fill('Bullet ' + i);
  }
  }

  async fillKeyMoments(){
    const items = await this.page.locator('[data-input-type="ssTimelineDescription"]');
    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).fill('Key moment ' + i);
  }
  }

  async fillRelatedArticles(){
    const items = await this.page.locator('[data-input-type="ssTimelineDescription"]');
    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).fill('Key moment ' + i);
  }
  }

  async fillSummary(){
    await this.inputSummary.fill('Summary');
    await this.rBtnKicker.click();

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


