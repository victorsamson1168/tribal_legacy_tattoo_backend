const exp = require("express");
const Posts =require("./appRoutes/posts");
const DB_connection=require("./DB/DbConnection.js");
const dotenv=require("dotenv");
const cors=require("cors");
dotenv.config();

app = exp();

app.use(exp.json());
app.use(cors());

app.use("/posts",Posts);

app.listen(process.env.PORT,()=>{
console.log(`listning on port ${process.env.PORT}`)});


app.get("/",async(req,res)=>{
    try{
        res.status(200).json({ status: "success", message: "Welcome to the API...test direct push new"}).end();
    }
    catch(err)
    {
        res.status(400).send("something went wrong");
        console.log("something went wrong",err);
    }
})