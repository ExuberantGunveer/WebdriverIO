describe('login test',()=>{
    it('launch the browser', async ()=>{
    await browser.url('https://giftshop.redcross.org.uk/collections/new-in');
    browser.maximizeWindow();
    await  browser.pause(3000);
    const manageCookies = await $('button[id="onetrust-accept-btn-handler"]');
    await manageCookies.click();
    
    // //Get the URL 
    // console.log(await browser.getUrl()); 
    
    // Verify the Login Page
    await expect(browser).toHaveTitle("New in");
    console.log(' The Title of the Opencart Website is : ' +  await browser.getTitle);

    const verifyNewItem = await $("//div[class='card']//div//ul//li//following-sibling::li//a[contains(text(),'79')]");
    const verifyListItem = await $("//span[contains(text(),'79')]");
    // await expect(verifyListItem).toBePresent();

    
    const newItembtn = await verifyListItem.isDisplayed ;
    const newItemlistbtn = await verifyNewItem.isDisplayed ;
    if(newItembtn === true){
            console.log("List Value is Displayed");
    }
    if(newItemlistbtn === true){
        console.log("Item Value is Displayed");
}
    // const listItembtn= await verifyNewItem.isDisplayed ;
    if(newItembtn && newItemlistbtn){
        console.log('List Item details are Match with New Item')
    }else {
        console.log('Doesnt Match');
    }

    // let itemCount = 0;
    // const nextBtn = await $("//a[contains(text(),'Next')]");
    // while(nextBtn.isDisplayed){
    //     const iteamDiv = await $("//div[class='product-item product-item--vertical  1/3--tablet-and-up 1/3--desk']");
    //     itemCount = itemCount + iteamDiv.getSize() ;
    //     nextBtn.click();
      
    //     if(!nextBtn.isDisplayed){
    //         break;
    //     }
    // }


    // if(nextBtn.isDisplayed){
    //     const iteamDiv = await $("//div[class='product-item product-item--vertical  1/3--tablet-and-up 1/3--desk']");
    //     itemCount = itemCount + iteamDiv.getSize() ;
    //     nextBtn.click();
    // }else{
    //     browser.closeWindow();
    // }

    // })

    // const productOne = await $("//div[class='product-item__info-inner']//a[contains(text(),'Thomas Street Lime and Basil Leaf Soy Wax Scented Candle')]//following-sibling::div//span[class='price']");
    // await productOne.scrollIntoView();
    // const productOneName = await productOne.getText;
    // console.log("My Product Value is : "+productOneName);


    // const productOneClick = $("//div[class='product-item__info-inner']//a[contains(text(),'Thomas Street Lime and Basil Leaf Soy Wax Scented Candle')]");
    // await (await productOneClick).click();
     
    // await  browser.pause(3000);
    
    // const productOne1 = await $("//div[class='product-form__info-content']//div[class='price-list']//span[class='price']");
    // const productOneName1 = await productOne1.getText;
    // console.log("My Product Value is : "+productOneName1);



})
})