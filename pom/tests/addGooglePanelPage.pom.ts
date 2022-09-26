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
  addItemBtn = this.page.locator('.block-list-appender [aria-label="Add NC Google Panel"] svg')
  btnImmediately = this.page.locator('.editor-post-publish-panel__link >> text=Immediately')
  inputYear = this.page.locator('[name="year"]')
  inputDate = this.page.locator('[name="date"]')
  noticeMessage = this.page.locator('.components-notice__content')
  btnSwitchToDraft = this.page.locator('.editor-post-switch-to-draft');
  btnOK = this.page.locator('button', { hasText: 'OK' });
  inputTitleRD = this.page.locator('[data-input-type="rdPanelTitle"]')







  constructor(public readonly page: Page) { }

  async dismissModal(){
    await this.closeModal.click()
    //await this.activateSources.click()
  }

  async activateFullScreenModel(){
    //await this.options.click()
    //await this.btnFullScrenMode.click()

  }

  async selectTemplate(value){
    await this.dropDownTemplate.selectOption(value)

  }

  async dragAndDropArticle(){    
    await this.page.waitForLoadState('networkidle')
    await this.page.waitForLoadState('load')
    await expect(this.eyeInformation.first()).toBeVisible;
    await this.page.locator('.nc-feed-sources-sidebar-card').first().dragTo(this.page.locator('[for="Panel title"]'));
    await this.page.waitForLoadState('load')
    await this.inputHeadline.fill('Headline')
    await this.inputKicker.fill('')

  }

  async dragAndDropArticleRD(){    
    await this.page.waitForLoadState('networkidle')
    await expect(this.eyeInformation.first()).toBeVisible;
    await this.page.locator('.nc-feed-sources-sidebar-card').first().dragTo(this.page.locator('[for="Panel title"]'));
    await this.inputHeadline.fill('Headline')
    await this.inputKicker.fill('')

  }


  async fillURLandEnterRA(){

    const url = 'https://www.marketwatch.com/story/german-government-may-nationalize-uniper-to-prevent-collapse-report-11663155076'
    const items = await this.page.locator('[data-input-type="ssRaLink"]');
    const headLines = await this.page.locator('[data-input-type="ssRaTitle"]');
    const kickers = await this.page.locator('[data-input-type="ssRaOverline"]');
    const images = await this.page.locator('.ra-rigth');


    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).fill(url);
    await this.page.keyboard.press('Enter');
    //await this.page.waitForLoadState('networkidle')
    //await this.page.waitForLoadState('domcontentloaded')
    await this.page.waitForLoadState('load')
    await this.page.waitForSelector('.panel-field-loading-message',{state: "hidden"})
    await images.nth(i).click();
    await headLines.nth(i).fill('Headline');
    await kickers.nth(i).fill('Kicker');


    }
  }

  async fillURLandEnterRD(){

    const url = 'https://www.marketwatch.com/story/german-government-may-nationalize-uniper-to-prevent-collapse-report-11663155076'
    const items = await this.page.locator('[data-input-type="rdRaLink"]');
    const headLines = await this.page.locator('[data-input-type="rdRaTitle"]');
    const kickers = await this.page.locator('[data-input-type="rdRaOverline"]');



    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).fill(url);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('load')
    await this.page.waitForSelector('.panel-field-loading-message',{state: "hidden"})
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


  async fillPanelTitle(title='Title'){
    await this.inputPanelTitle.fill(title)

  }

  async fillPanelTitleRD(title){
    await this.inputTitleRD.fill(title)

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

  async addItem(){
    await this.dropDownTemplate.click();
    await this.addItemBtn.click();

  }

  async publishPanel(){
    await this.btnPublish.click();
    await this.btnPublishSB.click();

  }
  
  async schedulePanel(year='2023'){
    await this.btnPublish.click();
    await this.btnImmediately.click()
    await this.inputYear.fill(year)
    await this.inputDate.click()
    await this.btnPublishSB.click();
    await expect(this.noticeMessage).toContainText('scheduled')
  
  }

  async verifyIfPanelIsScheduled(){
    await expect(this.noticeMessage).toContainText('scheduled')
    }

  async verifyIfPanelIsPublished(){
    await this.successMessage.click();
    await this.successMessage.isVisible();


  }

  async draftPanel(){
    await this.btnSwitchToDraft.click();
    await this.btnOK.click();
    await this.successMessage.click();


  }


}


