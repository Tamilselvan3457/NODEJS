//here we get the lodash module to the underscore
const _= require('lodash');
//here we have got the xlsx module
const xlsx = require('xlsx');

//here we read the excel file and creating the variable to store
const workbook = xlsx.readFile('email.xlsx');

//here use the created variable to access the first sheet in the excel with passing the sheetname of zero(first sheet)
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

//here defining the column is an array object
const columnA = [];
//here creating the for loop with z cells in worksheet have the element
for (let z in worksheet) {
    //here creating the if condition to mathch with the c column 
    //also here converting the z(accessing each cells) to the string function 
   if(z.toString()[0]=== 'D'){
     
     //here we use push to method to append the array of string  from worksheet to the columnA
     //.v is to access the cell value
    columnA.push(worksheet[z].v);
    
  }
}
console.log(columnA)
module.exports.tamil=columnA
// const email=require('./karthick')
// const selvan=email.tamil
// console.log(selvan[7])