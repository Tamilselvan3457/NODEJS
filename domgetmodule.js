//here we get jsdom module 
const jsdom = require("jsdom");
//here we define the module through {JSON} by creating this
const { JSDOM } = jsdom;

//here we create constructor  and pass the string to the {JSON} and return as json object and store in the const
const dom = new JSDOM(`<!DOCTYPE html>
<html>
    <head>
      
    </head>
    <body>

            <p>Hello world</p>
            <a href="about">about</a><br><br><br><br><br><br>
            <a href="hobby">hobby</a><br><br><br>
         <form>
           <input placeholder="search ">
           <button>search</button>
         </form>
         </div> 
         
     </body>

     </html>`);
     //here we access the jsonobject which had no.of porperty(window) stored in that constant
     console.log(dom.window.document.querySelector("p").textContent);
     