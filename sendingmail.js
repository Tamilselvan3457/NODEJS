var nodemailer=require("nodemailer")
const _= require('lodash');
const xlsx = require('xlsx');
const workbook = xlsx.readFile('email.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const columnA = []


for (let z in worksheet) {
    if(z.toString()[0]=== 'D'){   // column of the emailid in the excel sheet
        
            columnA.push(worksheet[z].v)  
            
    }
    
  }

var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sender_mail_ID',
        pass:'mail_ID password'
    }
}
)
var mailoptions={
    from:'sender_mail_ID',
    to: columnA,   //receiver mailid from the excel sheet
   subject:'kindly Attend the Meeting',
    text:'All are requested to join COE meeting in the every saturday',
    
    }

transport.sendMail(mailoptions,function(error,info){
    if (error){
        console.log(error)
    }else{
        console.log("Email sent successfully")
    }
    
})

