import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';
import { allPreviewPanels } from './allPreviewPanels.pom';



test.describe.parallel('Single Story Related articles', () => {
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

  test('@NS Create Panel Single Story Related articles, drag and drop.', async ({ page }) => {

    const title = 'Related articles, drag and drop'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Create Single Story Related articles, copy and paste url.', async ({ page }) => {

    var title = 'Related article copy paste'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
    await AddPanel.fillURLandEnter()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
  
  })

  test('@NS Update Panel Single Story Related articles.', async ({ page }) => {

    const title = 'Related articles to updated'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
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

  test('@NS Create Panel Single Story Related articles, adding item.', async ({ page }) => {

    const title = 'Related articles, adding item'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
    await AddPanel.addItem()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Delete Panel Single Story Related articles.', async ({ page }) => {

    const title = 'Related articles to delete'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
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

  test('@NS Kill Panel Single Story Related articles.', async ({ page }) => {

    const title = 'Related articles to kill'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Schedule Panel Single Story Related articles.', async ({ page }) => {

    const title = 'Related articles scheduled'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.schedulePanel()
    await AddPanel.verifyIfPanelIsScheduled()
       
  })

  test('@NS Search Panel Single Story Related articles.', async ({ page }) => {

    const title = 'Related articles, preview'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllPreviewPanels()
    await PreviewPanels.searchPanels(title)
    await PreviewPanels.verifyPanelName(title)
       
  })

  

})
