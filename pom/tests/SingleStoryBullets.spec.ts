import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';


test.describe.parallel('Single story with bullets', () => {

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
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Create Panel Single Story Bullets, adding item.', async ({ page }) => {

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
    await AddPanel.addItem()
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Delete Panel Single Story Bullets, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanels = new allGooglePanels(page)
    const title= 'Bullets to delete'

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllGooglePanels()
    await AllPanels.searchPanels(title)
    await AllPanels.deletePanel()
    await AllPanels.verifyDeletePanel()
  
  })

  

  test('@NS Kill created Panel Single Story Bullets', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)


    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle()
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    //await AddPanel.draftPanel()
    //await AddPanel.verifyIfPanelIsPublished()


        
  })

})
