const mongoose=require('mongoose');
const UserSchema={
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
}

module.exports=mongoose.model("User",UserSchema);