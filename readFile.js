const fs = require('fs').promises;
const path = require('path');

console.log(__dirname);

filePath = path.join(__dirname,'./greeting.txt');
async function readFile(filePath){
    try{
        const data = await fs.readFile(filePath);
        console.log(data.toString());
    }
    catch(err){
        console.log(`get an error while reading the file ${err}`);
    }
}
readFile(filePath);