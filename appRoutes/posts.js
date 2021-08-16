const exp= require('express');
const router=exp.Router();
const Posts=require('../DB/model/PostModel');

router.get("/:id",(req,res)=>{
       Posts.findOne({_id:req.params.id},(err,post)=>{ 
       if(err){
           res.send("something went wrong");
       }
       res.send(post);
        })})
   

router.get("/",async(req,res)=>{
    try{
    const result=await Posts.find();
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
        const post=new Posts({
            url:req.body.url,
            height:req.body.height,
            width:req.body.width,
        });

        post.save().then((msg)=>{
            res.status(200).send({msg,messge:"successfully added to database"});

        })

    } catch (error) {
        console.log("herreeeee--------->>");
        res.status(400).send(error);
        
    }

})

router.delete("/:id",async(req,res)=>{
    try {
        const post=await Posts.findOne({_id:req.params.id});
        post.remove().then((msg)=>{
            res.status(200).send({msg,messge:"successfully removed from database"});
        })
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports= router;