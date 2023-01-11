import {Page, expect} from '@playwright/test';


export class loginPage {

  linkToLoGIn = this.page.locator('.ssoLogin-toggle.wpcom');
  inputUsername = this.page.locator('#user_login');
  inputPassword = this.page.locator('#user_pass');
  btnLogin = this.page.locator('#wp-submit');
  avatar = this.page.locator('.with-avatar');

  constructor(public readonly page: Page) { }

  async gotoURL(url=process.env.URL) {
    await this.page.goto(url)
  }

  async Login(user='editor@test.com', password='editor'){
    // await this.linkToLoGIn.click();
    // await this.inputUsername.fill(user);
    // await this.inputPassword.fill(password);
    // await this.btnLogin.click();
    // await this.avatar.isVisible();

  }





}
