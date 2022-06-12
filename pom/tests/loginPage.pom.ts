import {Page, expect} from '@playwright/test';


export class loginPage {

  linkToLoGIn = this.page.locator('.ssoLogin-toggle.wpcom');
  inputUsername = this.page.locator('#user_login');
  inputPassword = this.page.locator('#user_pass');
  btnLogin = this.page.locator('#wp-submit');
  avatar = this.page.locator('.with-avatar');

  constructor(public readonly page: Page) { }

  async gotoURL() {
    await this.page.goto('https://news-showcase-develop.showcase.newspress.app/wp-admin/')
  }

  async Login(user, password){
    await this.linkToLoGIn.click();
    await this.inputUsername.fill(user);
    await this.inputPassword.fill(password);
    await this.btnLogin.click();
    await this.avatar.isVisible();

  }





}
