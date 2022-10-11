import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';
import { allPreviewPanels } from './allPreviewPanels.pom';


test.describe.parallel.only('Single story with bullets', () => {

  test.beforeEach(async ({ page }) => {
    const hook = new hooks(page)
    hook.catchErrors()
              
  })

  test('@NS Create Panel Single Story Bullets, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanel = new allGooglePanels(page)
          

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Update Panel Single Story Bullets, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanels = new allGooglePanels(page)          
    const title = "Panel to update"

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
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


  test('@NS Create Panel Single Story Bullets, adding item.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanel = new allGooglePanels(page)
    const title = "SS Adding item"

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.addItem()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Delete Panel Single Story Bullets, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanels = new allGooglePanels(page)
    const title= 'SS Bullets to delete'

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
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

  test('@NS Search panel Panel Single Story Bullets on preview panels', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanels = new allGooglePanels(page)
    const PreviewPanels = new allPreviewPanels(page)
    const title= 'Preview Panels'

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
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

  

  test('@NS Kill created Panel Single Story Bullets', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const title= 'Killed panel'



    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.draftPanel()
    await AddPanel.verifyIfPanelIsPublished()


        
  })

})
