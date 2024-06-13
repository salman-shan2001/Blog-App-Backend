const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {blogmodel}=require("./modules/Blog")
const bcrypt=require("bcryptjs")             //for doing encrypt the password import bcrypttjs package

mongoose.connect("mongodb+srv://salmanshan:salman642001@cluster0.odxej1b.mongodb.net/BlogUsersXDB?retryWrites=true&w=majority&appName=Cluster0")


const app=express()
app.use(cors())
app.use(express.json())

//create a function to generateHashed password

const generateHashedPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

// CREATING SIGNUP APN


app.post("/SignUp",async(req,res)=>{
let input=req.body
 //console.log(input)                  read the values from postman to vs code terminal
 let hashedPassword=await generateHashedPassword(input.password)
 input.password=hashedPassword
 const Blog=new blogmodel(input)
 // console.log(Blog)                  read values and give unique id

 Blog.save()                           //storing the schema and data to mongoose
    res.json({"status":"success"})
})




app.listen(8080,()=>{
    console.log("surver is running")
})