var assert= require("assert")

describe('amazon login test',()=>{
    it('launch the browser', async ()=>{
    await browser.url('https://www.amazon.in/');
    browser.maximizeWindow();
    
    //Get the URL 
    console.log(await browser.getUrl()); 
    
    const amazonlinks = await $$('a');
   
    

    
    console.log("Tag Name "+amazonlinks.length);
    // assert.strictEqual(amazonlinks.length,385);
    
for(let i = 0;i<amazonlinks.length;i++){

    const getTxt = await amazonlinks[i].getText();
    const getProp = await amazonlinks[i].getAttribute("href");

   console.log("Link Names are : "+getTxt );
   console.log("Links : "+"  "+getProp);
  

}

    })
    
})