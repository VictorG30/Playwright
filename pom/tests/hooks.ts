import {Page, expect} from '@playwright/test';


export class hooks {

  constructor(public readonly page: Page) { }

  async catchErrors(){
    this.page.on("console", message => {
      if (message.type() === "error") {
        //console.log(message.location().url)
        //console.log(message.text())

          expect(message.location().url).not.toContain('ncu-newspress-gns' || 'php')            
          expect(message.text).not.toContain('ncu-newspress-gns' || 'php')  

      }
    })     
  }
  



}
