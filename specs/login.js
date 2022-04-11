const { default: loginPage } = require("../pageobjects/login.page");

describe('login test',()=>{
it('launch the browser', async ()=>{
await browser.url('https://www.opencart.com/index.php?route=account/login');
browser.maximizeWindow();

//Get the URL 
console.log(await browser.getUrl()); 

// Verify the Login Page
await expect(browser).toHaveTitle("OpenCart - Account Login");
console.log(' The Title of the Opencart Website is : ' +  await browser.getTitle);

await  browser.pause(3000);
})


it('enter the login detail',async ()=>{

    const emailid =  $('#input-email');
    const password = $('#input-password');
    const loginbtn = await $('button[class="btn btn-primary btn-lg hidden-xs"]');
     
    // Enter the Email ID : 
     await (await emailid).setValue('ekomkar500@gmail.com');
    
     // Veify the Email ID :
     const emailIDValue =  await emailid.getValue();
     console.log("Entered Value of Email ID Field : " + emailIDValue);

     await (await password).setValue('50192Prince');
     browser.pause(5000);

          // Verifying that Is the Login Button is Clickable ?
          const clickablebtn = await 
          loginbtn.isClickable(); 
          console.log("Verifying that Is the Login Button is Clickable ? " + clickablebtn);
     
          // Verifying that Is the Login Button is Enabled ?
          const enablebtn = await loginbtn.isEnabled();
          console.log("// Verifying that Is the Login Button is Enabled ? " + enablebtn );
     
          // Verifying that Is the Login Button is Displayed ?
          const displayedbtn = await loginbtn.isDisplayed();
          console.log(" Verifying that Is the Login Button is Displayed ?" + displayedbtn );

          await expect(loginbtn).toBeClickable();
     await loginbtn.click();

     


     
     // Verify the Account Page
     await expect(browser).toHaveUrlContaining('account')



})

})