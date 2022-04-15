var assert= require("assert")

describe('facebook login test',()=>{
    it('launch the browser', async ()=>{
    await browser.url('https://www.facebook.com/');
    browser.maximizeWindow();
    
    //Get the URL 
    console.log(await browser.getUrl()); 
    
    const createaccountlink = await $("//a[contains(text(),'Create New Account')]");
    await createaccountlink.waitForClickable();
    await createaccountlink.click();

    const day = await $('#day');
    await day.selectByAttribute("value","5");
    const dayText = await day.getValue();
    console.log("Value of Day :- "+dayText);
    assert.strictEqual(dayText,'5');

    const month = await $("#month");
    await month.selectByIndex(6);
    const monthText = await month.getValue();
    assert.strictEqual(monthText,'7');
    

    const year = await $("#year");
//    const yeartext =  await year.selectByAttribute("1992");
const test = await $("//option[@value='2021']");

   const text = test.getValue();
    console.log("Selected Year is : "+ text);
    // assert.strictEqual(year,'1992');

    // await browser.pause(10000);

    })
    
})