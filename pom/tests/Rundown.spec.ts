import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';
import { allPreviewPanels } from './allPreviewPanels.pom';


test.describe.parallel('Rundown', () => {
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

  test('@NS Create Panel Rundown, drag and drop.', async ({ page }) => {

    const title = 'RD, drag and drop'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Create Panel Rundown, copy and paste url.', async ({ page }) => {

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
    await AddPanel.fillURLandEnter()
    await AddPanel.fillPanelTitle('Rundown Panel')
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Update Panel Rundown.', async ({ page }) => {

    const title = 'RD, drag and drop'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
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

  test('@NS Create Panel Rundown, adding item', async ({ page }) => {

    const title = 'RD, drag and drop'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
    await AddPanel.addItem()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyErrorMessage()
       
  })

  test('@NS Delete Rundown panel.', async ({ page }) => {

    const title = 'Panel to delete Rundown'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
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

  test('@NS Kill Panel Rundown,', async ({ page }) => {

    const title = 'RD, drag and drop'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Schedule panel Rundown.', async ({ page }) => {

    const title = 'RD, drag and drop'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.schedulePanel()
    await AddPanel.verifyIfPanelIsScheduled()

       
  })

  test('@NS Search Panel Rundown,', async ({ page }) => {

    const title = 'RD, preview'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllPreviewPanels()
    await PreviewPanels.searchPanels(title)
    await PreviewPanels.verifyPanelName(title)
       
  })

  test.only('@NS Create Panel Rundown, without title.', async ({ page }) => {


    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectkindOfPanel('rundown')
    await AddPanel.dragAndDropArticle()
    await AddPanel.publishPanel()
    await AddPanel.verifyErrorMessage()
       
  })

  

})
