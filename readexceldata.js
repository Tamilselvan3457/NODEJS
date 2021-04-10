const xlsx =require("xlsx");
 

const workbook=xlsx.readFile('posts.xlsx');
const worksheet=workbook.Sheets[workbook.SheetNames];

const posts =[];
let post ={}; 

                                                                                                                                                                                                              
for (let cell in worksheet){
    const cellAsString=cell.toString();
    console.log(worksheet[cell].w);

    if (cellAsString[1]!=="r" && cellAsString !== "m"&& cellAsString[1]>1){
        if(cellAsString[0]=="A"){
            post.title=worksheet[cell].v;
        }
        if(cellAsString[0]=="B"){
            post.author=worksheet[cell].v;
        }
        if(cellAsString[0]=="C"){
            post.released=worksheet[cell].v;
            posts.push(post);
            
        }
    } 
}

