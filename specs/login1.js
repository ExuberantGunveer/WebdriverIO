describe('login test',()=>{
    it('enter the login detail', async ()=>{
     await browser.url('https://webdriver.io/docs/api/expect-webdriverio')
    //  await expect(browser.getTitle()).toEqual('object Promise')
    const btitle = $('button.btn.btn-primary.btn-lg.hidden-xs')
    let texr = btitle.getText()
    await console.log("New Title : "+texr)    
    // await console.log("New title :"+btitle)
  
    })
       
    })