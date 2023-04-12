import {test, expect} from '@playwright/test'
import {loginPage} from './loginPage.pom';
import {menuBar} from './menuBar.pom'
import {addGooglePanelPage} from './addGooglePanelPage.pom'
import { allGooglePanels } from './allGooglePanels.pom';
import { hooks } from './hooks';
import { allPreviewPanels } from './allPreviewPanels.pom';

test.use({ viewport: { width: 1700, height: 900 } });
test.describe.parallel('User experience', () => {
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

  test('@NS Search article by text.', async ({ page }) => {

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.searchArticle()
    await AddPanel.validateArticle()

       
  })

  test('@NS Search article by url.', async ({ page }) => {

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.searchArticleByURL()
    await AddPanel.validateArticle()

       
  })

  test('@NS Search articles on others tabs.', async ({ page }) => {

    await Login.gotoURL()
    await Login.Login()
    await SideBar.goToAddPanel()
    await AddPanel.dismissModal()
    await AddPanel.goToNextArticlesPage()
    await AddPanel.validateArticle()

       
  })


})
