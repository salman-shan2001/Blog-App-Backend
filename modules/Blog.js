const mongoose=require("mongoose")
const Schema=mongoose.Schema(
    {
        "name":{type:String,require:true},
        "email":{type:String,require:true},
        "password":{type:String,require:true}
    }
)

const blogmodel=mongoose.model("users",Schema);
module.exports={blogmodel}