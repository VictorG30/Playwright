import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';
import { allPreviewPanels } from './allPreviewPanels.pom';


test.describe.parallel('Panel single story with bullets', () => {
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

  test('@NS Create Panel Single story bullets, drag and drop.', async ({ page }) => {
         
    const title = 'SS Drag and Drop'
    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Create Panel Single story bullets, copy and paste.', async ({ page }) => {
         
    const title = 'SS Copy and Paste'
    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillURLandEnter()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Update Panel Single Story Bullets.', async ({ page }) => {
     
    const title = "SS to Update"

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
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


  test('@NS Create Panel Single Story bullets, adding item.', async ({ page }) => {

    const title = "SS Adding item"

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.addItem()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Delete Panel Single Story Bullets.', async ({ page }) => {

    const title= 'SS to delete'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
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

 

  test('@NS Kill Created Panel Single Story Bullets', async ({ page }) => {

    const title= 'SS Killed'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.draftPanel()
    await AddPanel.verifyIfPanelIsPublished()
        
  })

  test('@NS Scheduled Panel Single story bullets.', async ({ page }) => {
         
    const title = 'SS Scheduled'
    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle()
    await AddPanel.schedulePanel()
    await AddPanel.verifyIfPanelIsScheduled()
       
  })

  test('@NS Search Panel Single Story Bullets on preview panels', async ({ page }) => {

    const title= 'SS Preview'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllPreviewPanels()
    await PreviewPanels.searchPanels(title)
    await PreviewPanels.verifyPanelName(title)

  
  })


  test.only('@NS Create Panel Single story without title.', async ({ page }) => {
         

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

})
