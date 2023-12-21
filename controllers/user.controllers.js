const bcrypt = require("bcrypt")
const { user } = require("../models/user.schema")

// get 

const getlogin = (req,res)=>{
    res.render("login")
}

const getsignup = (req,res)=>{
    res.render("signup")
}

const signup = async(req,res)=>{

    try {
        const {username,email,password,role} = req.body

    const findemail = await user.find({email})

    if(email == findemail){
        res.send({error:"email already exist"})
    }
    else{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.send(err)
            }
            else{
                const obj = {email,password:hash,username,role}
                const data = await user.create(obj)
                res.redirect("home")
            }
        })
    }
    } catch (error) {
        console.log(error);
        res.send({error:error.message})
    }
}

const login = async(req,res)=>{
    
}

module.exports = {getlogin,getsignup,signup,login}