const { response } = require('express');
const express = require('express');
const router = express.Router();

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


router.post('/contact',async  (req, res) =>{

    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.json({error:"Please filled the field"})
    }

    try{
        const response = User.findOne({email: email})
        if(userExist){
            return res.status(422).json({error:"Email already exist"})
         }
         const user = new User({name, email, phone, work, password, cpassword});
         await user.save();
         res.status(201).json({message: "user registered successfuly"});
        

        
    }catch(err){
        console.log(err);
    }


});


module.exports = router;
