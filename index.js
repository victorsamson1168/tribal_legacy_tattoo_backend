const exp = require("express");
const Users =require("./appRoutes/users.js");
const DB_connection=require("./DB/DbConnection.js");
const dotenv=require("dotenv");
dotenv.config();

app = exp();

app.use(exp.json());

app.use("/users",Users);

app.listen(process.env.PORT,()=>{
console.log(`listning on port ${process.env.PORT}`)});


app.get("/",async(req,res)=>{
    try{
        res.status(200).json({ status: "success", message: "Welcome to the API"});
    }
    catch(err)
    {
        res.status(400).send("something went wrong");
        console.log("something went wrong",err);
    }
})