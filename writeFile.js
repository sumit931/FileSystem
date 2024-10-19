const fs = require('fs').promises;
const path = require('path');

async function openFile(){
    try{
        const csvHeaders = 'name,quantity,price';
        await fs.writeFile('groceries.csv',csvHeaders);
    }
    catch(err){
        console.log("Detected an error = ",err);
    }
}

async function addGroceryItem(name,quantity,price){
    try{
        const csvLine = `\n${name},${quantity},${price}`;
        await fs.writeFile(`groceries.csv`,csvLine,{flag:'a'});
    }
    catch(err){
        console.log(`you are getting this ${err}`);
    }
}

(async function () {
    await openFile();
    await addGroceryItem('eggs', 12, 1.50);
    await addGroceryItem('nutella', 1, 4);
  })();