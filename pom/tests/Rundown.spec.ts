import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';


test.describe.parallel('Rundown', () => {

  test.beforeEach(async ({ page }) => {
    const hook = new hooks(page)
    hook.catchErrors()
              
  })

  test('@NS Create Panel rundown, copy and paste url.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanel = new allGooglePanels(page)


    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await page.locator('select').first().selectOption('rundown')
    await AddPanel.fillURLandEnterRD()
    await AddPanel.fillPanelTitleRD('Rundown Panel')
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Delete Rundown panel.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanels = new allGooglePanels(page)

    var title = 'Panel to delete Rundown'

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await page.locator('select').first().selectOption('rundown')
    await AddPanel.fillURLandEnterRD()
    await AddPanel.fillPanelTitleRD(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
    await AddPanel.activateFullScreenModel()
    await SideBar.goToAllGooglePanels()
    await AllPanels.searchPanels(title)
    await AllPanels.deletePanel()
    await AllPanels.verifyDeletePanel()

  
  })

  test('@NS Schedule panel, copy and paste url.', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)
    const AllPanel = new allGooglePanels(page)


    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await page.locator('select').first().selectOption('rundown')
    await AddPanel.fillURLandEnterRD()
    await AddPanel.fillPanelTitleRD('Scheduled panel')
    await AddPanel.schedulePanel()
    await AddPanel.verifyIfPanelIsScheduled()

       
  })

})
