const exp= require('express');
const router=exp.Router();
const Posts=require('../DB/model/PostModel');


const docs_per_page=10;

router.get("/:id",(req,res)=>{
       Posts.findOne({_id:req.params.id},(err,post)=>{ 
       if(err){
           res.json("something went wrong");
       }
       res.json(post);
        })})
   

router.get("/",async(req,res)=>{
    try{
    const result=await Posts.find();
    res.json({"Data":result,"total_documents":result.length});
    }
    catch(err)
    {
        res.status(400).json("something went wrong");
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
            res.status(200).json({msg,messge:"successfully added to database"});

        })

    } catch (error) {
        console.log("herreeeee--------->>");
        res.status(400).json(error);
        
    }

})

router.delete("/:id",async(req,res)=>{
    try {
        const post=await Posts.findOne({_id:req.params.id});
        post.remove().then((msg)=>{
            res.status(200).json({msg,messge:"successfully removed from database"});
        })
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports= router;