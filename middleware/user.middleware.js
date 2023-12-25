const jwt = require("jsonwebtoken")

const authuser = (req,res,next)=>{
    const {token} = req.cookies
    const data = jwt.verify(token,process.env.key)
    if (data) {
        req.bla = data
        next()
    }
    else{
        return res.send({error:"Signup & Login First"})
    }
}

const authadmin = (req,res,next)=>{
    const {token} = req.cookies
    
    const data = jwt.verify(token,process.env.key)
    if(data.role == "admin"){
        req.bla = data
        next()
    }
    else{
        return res.send({error:"only admin can access this page"})
    }
}


module.exports = {authuser,authadmin}