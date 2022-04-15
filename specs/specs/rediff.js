var assert= require("assert")

describe('login test two',()=>{
    it('launch the browser', async ()=>{
    await browser.url('https://mail.rediff.com/cgi-bin/login.cgi');
    browser.maximizeWindow();
    
    //Get the URL 
    console.log(await browser.getUrl()); 
    
    const signinLink = await $("input[name='proceed']");
    await signinLink.waitForClickable();
    await signinLink.click();
    const alert_text = await browser.getAlertText();
        console.log("Alert Message is : "+ alert_text);
    
    assert.deepEqual(alert_text,"Please enter a valid user name");    
     await browser.acceptAlert();

     await browser.pause(7000);
     await browser.saveScreenshot("./ScreenShots/wdio1.png");


    })
    
})