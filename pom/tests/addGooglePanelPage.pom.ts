import {Page, expect} from '@playwright/test';
import {test} from '@playwright/test'



export class addGooglePanelPage {

  closeModal = this.page.locator('[aria-label="Close dialog"]')
  activateSources = this.page.locator('[aria-label="NC Feed Sources"]')
  eyeInformation = this.page.locator('.show-data-modal-btn')
  inputArticleUrl = this.page.locator('[for="Article URL"] ~ input')
  inputPanelTitle = this.page.locator('[for="Panel title"] ~ textarea')
  btnPublish = this.page.locator('.editor-post-publish-panel__toggle')
  btnUpdated = this.page.locator('.components-button.editor-post-publish-button')
  btnPublishSB = this.page.locator('.editor-post-publish-button.editor-post-publish-button__button')
  imagePreview = this.page.locator('.panel-media-img')
  successMessage = this.page.locator('.components-notice.is-success.is-dismissible')
  errorMessage = this.page.locator('.components-notice.is-error')
  inputHeadline = this.page.locator('[for="Headline"] ~ textarea')
  inputBullets = this.page.locator('[data-input-type="ssBullet"]')
  inputKeyMoments = this.page.locator('[data-input-type="ssTimelineDescription"]')
  inputKicker = this.page.locator('[for="Kicker"] ~ textarea')
  options = this.page.locator('.edit-post-header__settings [aria-label="Options"]')
  btnFullScrenMode = this.page.locator('.components-menu-item__item >> text=Fullscreen mode')
  dropDownTemplate = this.page.locator('.wp-block-nc-google-panel-list select')
  inputSummary = this.page.locator('[data-input-type="ssSummary"]')
  rBtnKicker = this.page.locator('.panel-field-radio [value="kicker"]')
  addItemBtn = this.page.locator('.block-list-appender [aria-label="Add NC Google Panel"] svg')
  btnImmediately = this.page.locator('.editor-post-publish-panel__link >> text=Immediately')
  inputYear = this.page.locator('[value="2023"]')
  inputDate = this.page.locator('[name="date"]')
  noticeMessage = this.page.locator('.components-notice__content')
  btnSwitchToDraft = this.page.locator('.editor-post-switch-to-draft');
  btnOK = this.page.locator('button', { hasText: 'OK' });
  inputTitleRD = this.page.locator('[data-input-type="rdPanelTitle"]')
  linkToPanel = this.page.locator('.row-title')
  inputByLine = this.page.locator('[for="Byline"] ~ textarea')
  linkShowcase = this.page.locator('.wp-menu-name >> text=News Showcase')
  dropDownKindofPanel = this.page.locator('[for="Template"] ~ select')
  labelTimeAgo = this.page.locator('.nc-feed-sources-sidebar-card > div:nth-child(2) > p:nth-child(2)')
  cropperIcon = this.page.locator('.dashicons-image-crop')
  btnReset = this.page.locator('.panel-editor__clear-btn')
  btnResetConfirm = this.page.locator('.components-modal__content .button.is-primary >> text=Reset')



  urlWSJ = 'https://www.wsj.com/articles/mysteries-book-review-anthony-horowitz-the-twist-of-a-knife-11668179494'
  urlMW = 'https://www.marketwatch.com/story/ascend-wellness-and-ayr-post-wider-losses-as-revenue-climbs-11668178704'
  urlBarrons = 'https://www.barrons.com/articles/microsoft-stock-price-london-stock-exchange-51670835512'
  urlNY = 'https://nypost.com/2023/01/25/kellan-islas-7-killed-mom-emily-mauled-by-pack-of-dogs-in-idaho/'
  
  constructor(public readonly page: Page) {

   }

  async dismissModal(){
    // await this.page.waitForLoadState('networkidle') 
    // let status = await this.closeModal.first().isVisible()
    // if (status=true){
    //   await this.closeModal.click({force:true})
    // }
    let val = (await this.labelTimeAgo.first().innerText()).valueOf()
    console.log(val)   
  }

  async activateFullScreenModel(){

    let statusFS = await this.linkShowcase.isVisible()

    if (statusFS==false){
    await this.options.click({force:true})
    await this.btnFullScrenMode.scrollIntoViewIfNeeded()
    await this.btnFullScrenMode.click({force:true})
    }

  }

  async selectTemplate(value){
    await this.dropDownTemplate.selectOption(value)

  }

  async selectkindOfPanel(value){
    await this.dropDownKindofPanel.first().selectOption(value)

  }

  async clearArticles(){
    await this.btnReset.first().waitFor({state:'visible'})
    let statuskicker = await this.btnReset.first().isVisible()

    if(statuskicker===true){
    let btns = await this.btnReset;
        for (let i = 0; i < await btns.count(); i++) {
          if(i!=1){
            await this.btnReset.nth(i).click({force: true})
            await this.btnResetConfirm.click()
          }
    }
    }
  }

  async fillKickers(){
    let statuskicker = await this.inputKicker.first().isVisible()

    if(statuskicker===true){
    let kickers = await this.inputKicker;
        for (let i = 0; i < await kickers.count(); i++) {
          await this.inputKicker.nth(i).fill('kicker')
    }
    }
  }

  async fillHeadLines(){
    let statusHeadline = await this.inputHeadline.first().isVisible()

    if(statusHeadline===true){
      let headlines = await this.inputHeadline;
      for (let j = 0; j < await headlines.count(); j++) {
        await this.inputHeadline.nth(j).fill('HeadLine')
      }
      }
  }

  async fillBullets(){
    let statusBullets = await this.inputBullets.first().isVisible()

    if(statusBullets===true){
      let bullets = await this.inputBullets;
      for (let j = 0; j < await bullets.count(); j++) {
        await this.inputBullets.nth(j).fill('Bullet ' + j)
      }
      }
  }

  async fillKeyMoments(){
    let statusKM = await this.inputKeyMoments.first().isVisible()

    if(statusKM===true){
      let keyMoments = await this.inputKeyMoments;
      for (let j = 0; j < await keyMoments.count(); j++) {
        await this.inputKeyMoments.nth(j).fill('Key moment ' + j)
      }
      }
  }

  async dragAndDropArticle(){    
    await this.page.waitForLoadState('networkidle')
    await this.eyeInformation.first().waitFor({state: "visible"});
    await expect(this.activateSources.first()).toBeVisible;

    const items = await this.page.locator('.components-drop-zone');
    for (let i = 0; i < await items.count(); i++) {   
          if(i!=1)      
          await this.page.locator('.nc-feed-sources-sidebar-card').nth(i).dragTo(items.nth(i), {force: true})
          await this.page.waitForLoadState('networkidle')

        }

        await this.fillKickers()
        await this.fillHeadLines()
        await this.fillBullets()
        await this.fillKeyMoments()
        
  }

  async fillURLandEnter(){


    const items = await this.inputArticleUrl;

    for (let i = 0; i < await items.count(); i++) {
      
      let url = await this.page.url()
      if(url.includes('barrons'))
        await items.nth(i).fill(this.urlBarrons)
      

    await this.page.keyboard.press('Enter');
    await this.page.waitForSelector('.panel-field-loading-message',{state: "hidden"})
      }    
    await this.fillKickers()
    await this.fillHeadLines()
    await this.fillBullets()
    await this.fillKeyMoments()
    
  }
 
  async fillPanelTitle(title='Title'){
    await this.inputPanelTitle.fill(title)

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
    await this.inputPanelTitle.type(text)
    await this.btnUpdated.click();


  }
  
  async schedulePanel(year='2024'){
    await this.btnPublish.click();
    await this.btnImmediately.click()
    await this.inputYear.fill(year)
    await this.inputYear.click()
    await this.btnPublishSB.click();
    await expect(this.noticeMessage).toContainText('scheduled')
  
  }

  async verifyIfPanelIsScheduled(){
    await expect(this.noticeMessage).toContainText('scheduled')
    }

  async verifyIfPanelIsPublished(){

    await expect(this.successMessage).toBeVisible;
    await expect(this.successMessage).toContainText('Saved');

  }

  async verifyErrorMessage(){
    await expect(this.errorMessage).toBeVisible;
    await expect(this.errorMessage).toContainText('failed');

  }

  async verifyIfPanelIsKilled(){
    await this.successMessage.click();
    await expect(this.successMessage).toContainText('Saved');

  }

  async verifyIfPanelIsUpdated(){
    await expect(this.inputPanelTitle).toContainText('Updated')



  }

  async verifyCropperIsDisplayed(num){
    var elemnts = await this.cropperIcon.count();

    await expect(this.cropperIcon).toBeVisible
    await expect(elemnts).toEqual(num)


  }

  async draftPanel(){
    await this.btnSwitchToDraft.click();
    //await this.btnOK.click();

    //await this.page.getByRole('button').click();
    //await this.successMessage.click();


  }


}


