import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';


test.describe.parallel('Single Story Key Moments', () => {

  test.only('@NS Create Panel Single Story Related articles, copy and paste url.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanel = new allGooglePanels(page)


    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillURLandEnter()
    await AddPanel.fillPanelTitle("Key moments by playwright")
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Delete Panel Key moments, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanels = new allGooglePanels(page)

    var title = 'Panel to delete Related articles'

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('relatedArticle')
    await AddPanel.fillSummary()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillURLandEnter()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllGooglePanels()
    await AllPanels.searchPanels(title)
    await AllPanels.deletePanel()
    await AllPanels.verifyDeletePanel()

  
  })

})
