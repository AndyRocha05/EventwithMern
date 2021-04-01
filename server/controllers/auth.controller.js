const User = require('../models/user.model'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt');
module.exports = {
    register: (req, res) =>{
        const user = new User(req.body);
        User.create(req.body)
        .then(data =>{
            res.cookie("usertoken",jwt.sign({id:data._id}, process.env.JWT_KEY),{
                httpOnly: true,
                // expires: new Date(Date.now() + 9000000)
            }).json({
                msg:"success",
                 userLogged:{
                     firstName: data.firstName, 
                     lastName: data.lastName,
                     id: data._id
                    }
                })
        })
        .catch(err =>res.status(400).json(err.errors))

    },
    login: (req, res) =>{
        User.findOne({email:req.body.email})
        .then(data =>{
            if(data === null){
                res.json({error:"invalid login attempt"})
            }
            else{
                bcrypt.compare(req.body.password, data.password)
                    .then( isValid =>{
                        if(isValid === true){
                            res.cookie("usertoken",jwt.sign({_id:data._id},process.env.JWT_KEY),{
                                httpOnly: true,
                                 expires: new Date(Date.now() + 9000000)
                            }).json({
                                msg:"success",
                                 userLogged:{
                                     firstName: data.firstName, 
                                     lastName: data.lastName,
                                     id: data._id
                                    }
                                })
                        }
                    })
                    .catch(err => res.json({error:"invalid login attempt"}))
            }

        })
        .catch(err=> res.json({error:"invalid login attempt"}))

    },
    logout: (req, res) =>{
        res.clearCookie("usertoken");
        res.json({msg:"logged out"})

    }

}