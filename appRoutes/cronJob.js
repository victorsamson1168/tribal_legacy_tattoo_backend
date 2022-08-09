const exp= require('express');
const router=exp.Router();
const Posts=require('../DB/model/PostModel');
const nodemailer = require("nodemailer");



router.post("/",async(req,res)=>{
    try {
        console.log( " ------------->  into the nodemailer API  - >  >>>>>>.")
        const  email  =  "thisisAkkiOP@gmail.com"
        const re_data =  req?.body
         //  {
        //      name : "victor",
        //      mobile :  96586859683,
        //     email :  "Message"
        // }
	
		let transporter = nodemailer.createTransport({
			service:'gmail', // true for 465, false for other ports
			auth: {
			  user: 'triballegacytattoos@gmail.com', // generated ethereal user
			  pass: 'qcmpgokfsvwqoofw'
			}
		  });
		
		  let mailOptions = {
			  from: 'triballegacytattoos@gmail.com',
			  to:'victor.samson@mckinleyrice.co',
			  subject:'Hello ✔ ',
			  text:'Hello All Managers,'
			  + ' >>> PLease give scores to your team members.'
			  + ' use this url -: https://hack-2k22-frontend.herokuapp.com/scoreform '
			  + '...'
			  + 'Regards, '
			  + 'MR Creativity'
		  }
		
		  transporter.sendMail(mailOptions, function(err,data){ 
			if(err){
				console.log("erro ",err.message )
				return res.json({result:false, error:err})
			}else{
				console.log("Message sent succefully ..", data)
				return res.json({result:true, data : data})
			}
		  })

    } catch (error) {
        console.log("herreeeee--------->>");
        res.status(400).json(error);
        
    }

})
module.exports= router;