describe('Dynamic Wait' , ()=>{

    it('Wait for Text',async ()=>{

        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");

        browser.maximizeWindow();
        const startBtn = await $("//button[contains(text(),'Start')]");
        await startBtn.click();

        const text = await $("//h4[contains(text(),'Hello World!')]");

        await text.waitForDisplayed();
        

        

    })
})