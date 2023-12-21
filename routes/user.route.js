const {Router} = require("express")
const { getsignup, getlogin, signup, login } = require("../controllers/user.controllers")
const userrouter = Router()

userrouter.get("/signup",getsignup)
userrouter.post("/signup",signup)
userrouter.get("/login",getlogin)
userrouter.post("/login",login)


module.exports = {userrouter}