const mongoose=require('mongoose');
//creating a schema and assign to the variable
var studentschema=mongoose.Schema({
    studentId:Number,
    firstName:String,
    lastName:String,
    department:String
});
//creating the variable by connecting to the schema to the same models(student)
var studentModel=mongoose.model("student",studentschema);
//exporting the modules
module.exports=studentModel;