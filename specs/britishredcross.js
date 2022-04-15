describe('british login test',()=>{
    it('launch the browser', async ()=>{
    await browser.url('https://giftshop.redcross.org.uk/collections/new-in');
    browser.maximizeWindow();
    await  browser.pause(3000);
    const manageCookies = await $('button[id="onetrust-accept-btn-handler"]');
    await manageCookies.click();
    
    // //Get the URL 
    // console.log(await browser.getUrl()); 
    
    // Verify the Homepage Page
    await expect(browser).toHaveTitle("New in");
    console.log(' The Title of the Website is : ' +  await browser.getTitle);

    const verifyNewItem = await $("//div[class='card']//div//ul//li//following-sibling::li//a[contains(text(),'83')]");
    const verifyListItem = await $("//span[contains(text(),'83')]");
    // await expect(verifyListItem).toBePresent();

    
    const newItembtn = await verifyListItem.isDisplayed ;
    const newItemlistbtn = await verifyNewItem.isDisplayed ;
    if(newItembtn === true){
            console.log("List Value is Displayed");
    }
    if(newItemlistbtn === true){
        console.log("Item Value is Displayed");
}
  
    if(newItembtn && newItemlistbtn ){
        console.log('List Item details are Match with New Item')
    }else {
        console.log('Doesnt Match');
    }

   //Click on First Product 
    const productOne = await $("//a[contains(text(),'Thomas Street Lime and Basil Leaf Soy Wax Scented Candle')]");
    await productOne.scrollIntoView();
    const productOneName = await productOne.getText;
    console.log("My Product Value is : "+productOneName);
    await productOne.waitForClickable();
    await productOne.click();

    // Added First Product to Cart
    const addtocartbtn = await $("(//button[contains(text(),'Add to cart')])[1]");
    await addtocartbtn.waitForClickable();
    await addtocartbtn.click();
    
    
    const newinLink = $("(//a[contains(text(),'New In')])[2]");
    await newinLink.waitForClickable();
    await newinLink.click();

    await  browser.pause(2000);

   // Click on Second Product : 
    const productTwo = await $("//a[contains(text(),'Thomas Street Pomegranate Soy Wax Scented Candle')]");
    await productTwo.scrollIntoView();
    await productTwo.waitForClickable();
    await productTwo.click();

   // Added Second Product to Cart : 
    await addtocartbtn.waitForClickable();
    await addtocartbtn.click();

   // Click on Cart : 
    const cart = await $("//span[contains(text(),'Cart')]");
    await cart.waitForClickable();
    await cart.click();
    await browser.pause(3000);

    // async finalvalue => {
 
// Validating the Text of Final Value added to Cart :  
    const finalAddToCartPrice = await $("//span[@class='cart-recap__price-line-price']");
    const kk = await finalAddToCartPrice.getText();
    console.log("String Total Product Price is : - "+ kk);
   const productFinalIntPrice =  kk.replace('£', '');
  
     console.log("The Total Product Price is :- " + productFinalIntPrice);
     let one =  await Math.floor(productFinalIntPrice);
    console.log("Int Value : "+ one);
        // return productFinalIntPrice ;
    // }

// async addToNumber =>{
    const productOnePrice = await $("(//span[@class='line-item__price'])[1]");
    const productTwoPrice = await $("(//span[@class='line-item__price'])[2]");

// Get text of 1st Product Value & Converting String to Integer :-
    const po = await productOnePrice.getText();
    console.log("String Product Price is : - "+ po);
    const productOneIntPrice =  po.replace('£', '');
    let two = await Math.floor(productOneIntPrice);
    console.log("First Product Int Value : " + two)

 // Get text of 2nd Product Value & Converting String to Integer :-
    const pt = await productTwoPrice.getText();
    console.log("String Product Price is : - "+ pt);
    const productTwoIntPrice =  pt.replace('£', '');
    let three = await Math.floor(productTwoIntPrice);
    console.log("Second Product Int Value : " +three);

 // Verifying Total Value of Product with the Value of Products Added to Cart
    let sum = two + three ;
    console.log("Total Sum of Product is : " + sum);

    if(sum=== one){
        console.log("HURREEEYYYYYY ! The Product Value Match with Total Cart Value");
    }else {
        console.log("Sorry : The Product Value Doesn't Match with Cart Value");
    }


// }

// Verifying First Product Quantity Value & Converting String to Integer : 
  const quantityOne = await $("(//input[@class='quantity-selector__value'])[2]");
  const qo = await quantityOne.getAttribute('value');
  console.log("Quantity of First Product is : "+ qo);
  let qone = await Math.floor(qo);
  console.log("Integer Value of Product One : " + qone);


// Verifying Second  Product Quantity Value & Converting String to Integer :
  const quantityTwo = await $("(//input[@class='quantity-selector__value'])[4]");
  const qt = await quantityTwo.getAttribute('value');
  console.log("Quantity of Second Product is : "+ qt);
  let qtwo = await Math.floor(qt);
  console.log("Integer Value of Product Two : " + qtwo);

// Verifying Product Quantity Value shown on Cart & Converting String to Integer :  
  const cartValue = await $("//span[@class='header__cart-count']");
  const cv = await cartValue.getText();
  console.log("Products added to cart : " + cv);
  let qcv = await Math.floor(cv);
  console.log("Integer Value of Added Product to Cart : " + qcv);

  // Addition of First & Second Product Quantity Value : 
  let sumCart = qone + qtwo ;

  // Verifying ! The Individual Product Value Match with Total Cart Value : 
  if(sumCart === qcv){
      console.log(" YIPPEEEEEE !  The Individual Product Value Match with Total Cart Value ");
  } else {
      console.log("Sorry : The Individual Product Value Doesn't Match with Cart Value")
  }


})
})