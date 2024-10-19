const ExcelJS = require("exceljs");
const workbook = new ExcelJS.Workbook();
const filePath = "./learn.xlsx";
workbook.xlsx.readFile(filePath)
.then(()=>{
    const worksheet = workbook.getWorksheet(1);
    worksheet.eachRow({includeEmpty : false},(row,rowNumber)=>{
        console.log(row.getCell(6).value);
    })
})
.catch((err)=>{
    console.log(`getting ${err} this error`);
})
