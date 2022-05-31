const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

require('../db/conn')

const User = require("../model/userSchema");

// using promises

// router.post('/contact',async  (req, res) =>{

//     const {name, email, phone, work, password, cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.json({error:"Please filled the field"})
//     }
//     User.findOne({email: email})
//     .then((userExist)=>{
//         if(userExist){
//            return res.status(422).json({error:"Email already exist"})
//         }
//         const user = new User({name, email, phone, work, password, cpassword});
//         user.save().then(() =>{
//             res.status(201).json({message: "user registered successfuly"});
//         }).catch((err) => res.status(500).json({error: "Failed to registered"}));
//     }).catch(err => {console.log(err) });
// });


router.post('/register',async  (req, res) =>{

    const {name, email, phone, work, password, cpassword} = req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
    
        return res.status(422).json({error:"Please filled the field"});
        
    }

    try{
        const userExist = await User.findOne({email: email})
        if(userExist){
            return res.status(422).json({error:"Email already exist"})
         }else if (password !== cpassword){
            return res.status(422).json({error: "password are not matching"})
         }else{
            const user = new User({name, email, phone, work, password, cpassword});
         
            await user.save();
            res.status(201).json({message: "user registered successfully"});
         }
         
        

        
    }catch(err){
        console.log(err);
    }
});
    // LOGIN ROUTE
    router.post('/signin', async (req, res) => {
        try{
            const {email, password} = req.body; 
            if(!email || !password){
                return res.status(400).json({error:"Please filled the data"})
            }
            
            const userLogin = await User.findOne({email: email});
            
            if(userLogin){
                const isMatch = await bcrypt.compare(password, userLogin.password);

                const token = await userLogin.generateAuthToken();
                
            if(!isMatch){
                res.status(400).json({error: "Invalid Credientials"});
            }
            else{
                res.json({message: "user Signin Successfully"});
            }
            }
            else{
                res.status(400).json({error: "Invalid Credientials"})
            }

        }catch (err){
            console.log(err)
        }
    });




module.exports = router;

