const xlsxFile = require('read-excel-file/node');
 
xlsxFile('email.xlsx').then((rows) => {
rows.forEach((col)=>{
        col.forEach((data)=>{
            console.log(data)
          
    })
})
})


// const xlsxFile = require('read-excel-file/node');
 
// xlsxFile('email.xlsx').then((rows) => {
// for (i in rows){
//        for (j in rows[i]){
//               console.log(rows[i][j])
//                 }
//           }
//    }
// )