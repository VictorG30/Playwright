import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'



test.describe.parallel('Visual automation test', () => {
  
  
  test.only('@NS Create Panel Single Story Bullets', async ({ page }) => {

    const Login = new loginPage(page)
    const SideBar = new menuBar(page)
    const AddPanel = new addGooglePanelPage(page)

    await Login.gotoURL()
    await Login.Login("admin@test.com","admin")
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.fillURLandEnter('https://www.thesun.ie/fabulous/8875095/im-stylist-colour-summer-2022/')
    await AddPanel.fillPanelTitle()
    await AddPanel.fillBullets()
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
        
  })

})
