import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';


test.describe.parallel('Single Story with Key Moments', () => {

  test.beforeEach(async ({ page }) => {
    const hook = new hooks(page)
    hook.catchErrors()
              
  })

  test('@NS Create Panel Single Story Key Moments, drag and drop.', async ({ page }) => {

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

  test('@NS Delete Panel Key moments, drag and drop.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanels = new allGooglePanels(page)

    var title = 'Panel to delete Key moment'

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.selectTemplate('keyMoment')
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.fillKeyMoments()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllGooglePanels()
    await AllPanels.searchPanels(title)
    await AllPanels.deletePanel()
    await AllPanels.verifyDeletePanel()

  
  })

})
