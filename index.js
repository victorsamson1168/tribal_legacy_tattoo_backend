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
