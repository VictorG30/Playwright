import {Page, expect} from '@playwright/test';
import {test} from '@playwright/test'



export class addGooglePanelPage {

  closeModal = this.page.locator('[aria-label="Close dialog"]')
  activateSources = this.page.locator('[aria-label="NC Feed Sources"]')
  eyeInformation = this.page.locator('.show-data-modal-btn')
  inputArticleUrl = this.page.locator('[for="Article URL"] ~ input')
  inputPanelTitle = this.page.locator('[data-input-type="ssPanelTitle"]')
  btnPublish = this.page.locator('.editor-post-publish-panel__toggle')
  btnUpdated = this.page.locator('.components-button.editor-post-publish-button')
  btnPublishSB = this.page.locator('.editor-post-publish-button.editor-post-publish-button__button')
  imagePreview = this.page.locator('.panel-media-img')
  successMessage = this.page.locator('.components-notice.is-success.is-dismissible')
  inputHeadline = this.page.locator('[for="Headline"] ~ textarea')
  inputKicker = this.page.locator('[for="Kicker"] ~ textarea')
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
  linkToPanel = this.page.locator('.row-title')
  inputByLine = this.page.locator('[for="Byline"] ~ textarea')
  linkShowcase = this.page.locator('.wp-menu-name >> text=News Showcase')


  url = 'https://www.barrons.com/articles/brazils-colorful-fishing-village-trancoso-is-boomingjust-ask-anderson-cooper-01667225906'




  constructor(public readonly page: Page) {

   }

  async dismissModal(){
    await this.page.waitForLoadState('networkidle')
    await this.closeModal.click()
    let status = await this.eyeInformation.first().isVisible()

    if (status!=true)
    await this.activateSources.click()

  }

  async activateFullScreenModel(){

    let status = await this.linkShowcase.isVisible()

    if (status!=true)
    await this.options.click()
    await this.btnFullScrenMode.click()

  }

  async selectTemplate(value){
    await this.dropDownTemplate.selectOption(value)

  }

  async fillKickers(){
    let statuskicker = await this.inputKicker.first().isVisible()

    if(statuskicker===true){
    let kickers = await this.inputKicker;
        for (let i = 0; i < await kickers.count(); i++) {
          await this.inputKicker.nth(i).fill('kicker')
          await this.page.waitForLoadState('load')
    }
    }
  }

  async fillHeadLines(){
    let statusHeadline = await this.inputHeadline.first().isVisible()

    if(statusHeadline===true){
      let headlines = await this.inputHeadline;
      for (let j = 0; j < await headlines.count(); j++) {
        await this.inputHeadline.nth(j).fill('HeadLine')
        await this.page.waitForLoadState('load')
      }
      }
  }

  async dragAndDropArticle(){    
    await this.page.waitForLoadState('networkidle')
    await this.page.waitForLoadState('load')
    await expect(this.eyeInformation.first()).toBeVisible;
    await expect(this.activateSources.first()).toBeVisible;

    const items = await this.page.locator('.components-drop-zone');
    for (let i = 0; i < await items.count(); i++) {   
          if(i!=1)      
          await this.page.locator('.nc-feed-sources-sidebar-card').nth(i).dragTo(items.nth(i), {force: true})
          await this.page.waitForLoadState('load')
        }

        await this.fillKickers()
        await this.fillHeadLines()
        
  }

  async fillURLandEnter(){


    const items = await this.inputArticleUrl;

    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).fill(this.url);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('load')
    await this.page.waitForSelector('.panel-field-loading-message',{state: "hidden"})
    }    
    await this.fillKickers()
    await this.fillHeadLines()
    
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

  async updatePanel(text='Updated'){
    await this.linkToPanel.first().click()
    await this.inputPanelTitle.fill(text)
    await this.btnUpdated.click();


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
    await expect(this.successMessage).toBeVisible;

  }

  async verifyIfPanelIsKilled(){
    await this.successMessage.click();
    await expect(this.successMessage).toHaveText('Saved');

  }

  async verifyIfPanelIsUpdated(){
    await expect(this.inputPanelTitle).toHaveText('Updated')



  }

  async draftPanel(){
    await this.btnSwitchToDraft.click();
    //await this.btnOK.click();

    //await this.page.getByRole('button').click();
    //await this.successMessage.click();


  }


}


