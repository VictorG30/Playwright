import {Page} from '@playwright/test';


export class homePage {

  listItems = this.page.locator('.todo-list li');
  inputBox = this.page.locator('input.new-todo');
  filterByActiveItemsButton = this.page.locator('.filters >> text=Active');
  filterByCompletedItemsButton = this.page.locator('.filters >> text=Completed');
  categories = this.page.locator('.discover-category').first();
  inputSearch = this.page.locator('input[name="search"]')
  cardVideo = this.page.locator('.search-cards-container .card')
  playerVideo = this.page.locator('#myPlayerID')
  btnPauseVideo = this.page.locator('button:has-text("Pause")')

  constructor(public readonly page: Page) { }

  async gotoURL() {
    await this.page.goto('https://nchq-video-preprod.go-vip.net/')
  }

  async searchVideo(text){
    await this.inputSearch.click();
    await this.inputSearch.fill(text);
    await this.inputSearch.press('Enter');
  }

  async goToVideo(){
    await this.cardVideo.first().click();
    await this.page.waitForLoadState()
  }

  async pauseVideo(){
    await this.btnPauseVideo.click();

  }

  async chekIfCategoriesAreDisplayed() {
    await this.playerVideo.isVisible()
  }

  async chekIfVideoPlayesIsDisplayed() {
    await this.categories.isVisible()
}



}
