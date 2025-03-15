
import User from '../model/user.model.js';



export const contactus=async(req,res)=>{
    try{
        const {fullname,email,mobilenumber}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"We will contact you within 24 hour"})
        }

        
        const createdUser= new User({
            fullname:fullname,
            email:email,
            mobilenumber:mobilenumber
        })
        await createdUser.save()
        res.status(201).json({message:"We will contact you soon",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};