import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';


test.describe.parallel('Single Story Key Moments', () => {

  test.only('@NS Create Panel Single Story Key Moments, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanel = new allGooglePanels(page)


    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle("Key moments by playwright")
    await AddPanel.fillKeyMoments()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Delete Panel Single Story Bullets, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanels = new allGooglePanels(page)


    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle()
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllGooglePanels()
    await AllPanels.searchPanels('Created by playwright')
    await AllPanels.deletePanel()
    await AllPanels.verifyDeletePanel()
    //await page.pause()
  
  })

  test('@NS Create Rundown panel, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await page.locator('select').first().selectOption('rundown')
    
    await AddPanel.fillPanelTitleRD()
    await AddPanel.dragAndDropArticleRD()
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })
  
  

  test('@NS Create Panel Single Story Bullets, filling data.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.fillArticle()
    await AddPanel.fillPanelTitle()
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    //await page.pause()
  
  })



  test('@NS Create Panel Single Story Bullets, copy paste URL', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const url= 'https://www.thesun.ie/news/politics/9058367/boris-could-resign-tonight/'

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.fillURLandEnter(url)
    await AddPanel.fillPanelTitle()
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()

        
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
    // await page.locator('.editor-post-switch-to-draft').click();
    // await page.locator('button', { hasText: 'OK' }).click();
    // await page.locator('.components-button.components-notice__dismiss.has-icon').click();
    // await AddPanel.verifyIfPanelIsPublished()


        
  })

})
