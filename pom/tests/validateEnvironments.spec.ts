import { authenticator } from 'otplib';
import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';
import { allPreviewPanels } from './allPreviewPanels.pom';

test.use({ viewport: { width: 1700, height: 900 } });
test.skip('Validate environments from the sources,', () => {
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

  test('@NS Create Panel for barrons.', async ({ page }) => {

    const title = 'Barrons'

    await Login.gotoURL('https://barrons.int.pubedit.dowjones.io/wp-admin/')
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Create Panel for MG.', async ({ page }) => {

    const title = 'MG'

    await Login.gotoURL('https://mansionglobal.int.pubedit.dowjones.io/wp-admin/')
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

  test('@NS Create Panel for WSJ.', async ({ page }) => {

    const title = 'WSJ'

    await Login.gotoURL('https://wsj.int.pubedit.dowjones.io/wp-admin/')
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })
  
  test('@NS Create Panel for MarketWatch.', async ({ page }) => {

    const title = 'MarketWatch'

    await Login.gotoURL('https://mw.int.pubedit.dowjones.io/wp-admin/')
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.dragAndDropArticle()
    await AddPanel.fillPanelTitle(title)
    await AddPanel.publishPanel()
    await AddPanel.verifyIfPanelIsPublished()
       
  })

})
