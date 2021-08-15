const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const DB_url =process.env.DATABASE_URL;
  // "mongodb+srv://vic_samson:Joseph_123@victor.loykn.mongodb.net/mernStack?retryWrites=true&w=majority";
mongoose
  .connect(DB_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
  })
  .then(() => {
    console.log("connected to database")
  }).catch((err) => {
    console.log("something went wrong", err);
  });
module.exports = mongoose;
