import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';
import { allPreviewPanels } from './allPreviewPanels.pom';


test.use({ viewport: { width: 1700, height: 900 } });
test.describe.parallel('Single Story with Key Moments', () => {
  let hook
  let Login
  let SideBar
  let AddPanel
  let AllPanels
  let PreviewPanels

  test.beforeEach(async ({ page }) => {
    hook = new hooks(page)
    Login = new loginPage(page)
    SideBar = new menuBar(page)
    AddPanel = new addGooglePanelPage(page)
    AllPanels = new allGooglePanels(page)
    PreviewPanels = new allPreviewPanels(page)

    hook.catchErrors()
              
  })

  test('@NS Create Panel Single Story Key Moments, drag and drop.', async ({ page }) => {

    const title = 'Key moments drag and drop'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Create Panel Single Story Key Moments, copy and paste.', async ({ page }) => {

    const title = 'Key moments copy and paste'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillURLandEnter()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Update Panel Single Story Key Moments.', async ({ page }) => {

    const title = 'Key moments to update'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllGooglePanels()    
    await AllPanels.searchPanels(title)
    await AddPanel.updatePanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.verifyIfPanelIsUpdated()
       
  })

  test('@NS Create Panel Single Story Key Moments, adding item.', async ({ page }) => {

    const title = 'Key moments adding item'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.addItem()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Delete Panel Key moments.', async ({ page }) => {

    var title = 'Key moment to delete'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllGooglePanels()
    await AllPanels.searchPanels(title)
    await AllPanels.deletePanel()
    await AllPanels.verifyDeletePanel()

  
  })

  test('@NS Kill Panel Single story Key moments.', async ({ page }) => {

    var title = 'Panel to kill Key moment'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
  
  })

  test('@NS Scheduled Panel Single story Key moments.', async ({ page }) => {

    var title = 'Scheduled key moments'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.schedulePanel()
    await AddPanel.verifyIfPanelIsScheduled()
  
  })

  test('@NS Search Panel Single story Key moments.', async ({ page }) => {

    var title = 'Key moments preview'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllPreviewPanels()
    await PreviewPanels.searchPanels(title)
    await PreviewPanels.verifyPanelName(title)
  
  })


  test('@NS Create Panel Single Story Key Moments, without title.', async ({ page }) => {

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Validate cropper.', async ({ page }) => {
         

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.verifyCropperIsDisplayed(1)
       
  })

  test('@NS Validate clear form.', async ({ page }) => {
         

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.clearArticles()


  })
})
