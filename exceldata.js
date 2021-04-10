
const XLSX=require("xlsx");
//const { string } = require("yargs");
//const xlsx=require("node-xlsx")
//const {sheets}=xlsx;

const workbook=XLSX.readFile("email.xlsx")//,{cellDates:true});

const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// const addressofcell="C7"
// const worksheet=workbook.sheets[first_sheet_name]
// const ourcell=worksheet[addressofcell]
// const value =ourcell.v



//const data =xlsx.utils.sheet_to_json(tamil)
//const secondsheetname=sheets[0];
//const secondsheet=spreadsheet.sheets[secondsheetname]

//const adders= 'A1';
//const worksheet=wb.sheets[tamil]
//const desired_cell = worksheet[adders];
//const desired_value = (desired_cell ? desired_cell.v : undefined);
//const ws=xlsx.utils.wb.sheets['tamil']
//for ( var z in wb){
  // const cellAsString=cell.toString();
const data=XLSX.utils.sheet_to_json(worksheet);
  // if(z[0]==="!") continue;
   //  var col=z.substring(0,1);
     //const talk=XLSX.utils.sheet_to_json(workbook.Sheets[first_sheet_name[1]]);
  //  }
  //const C7=XLSX.talk['C7'] 
console.log(data)