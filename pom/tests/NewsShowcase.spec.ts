import {test, expect} from '@playwright/test'

test.describe.parallel('Visual automation test', () => {
  
  
  test('@NS About  page visual ', async ({ page }) => {
    await page.goto('https://news-showcase-develop.showcase.newspress.app/wp-admin/')
    await page.pause()
  
  })
  
        


})
