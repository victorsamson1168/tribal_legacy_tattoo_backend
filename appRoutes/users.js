const exp= require('express');
const router=exp.Router();
const Users=require('./../DB/model/UserModel');

router.get("/:id",(req,res)=>{
    res.send({name:"victor",
        age:34,
        bui:"99008",
        "id":req.params.id
    })
   // console.log(req.params);
});

router.get("/",async(req,res)=>{
    try{
    const result=await Users.find();
    res.send(result);
    }
    catch(err)
    {
        res.status(400).send("something went wrong");
        console.log("something went wrong",err);
    }
})

router.post("/",async(req,res)=>{
    try {
        const user=new Users({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            age:req.body.age,
        });

        user.save().then((msg)=>{
            res.status(200).send({msg,messge:"successfully added to database"});

        })

    } catch (error) {
        console.log("herreeeee--------->>");
        res.status(400).send(error);
        
    }

})

module.exports= router;