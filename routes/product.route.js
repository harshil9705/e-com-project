const {Router} = require("express")
const { home } = require("../controllers/product.controller")
const proroute = Router()

proroute.get("/",home)

module.exports = {proroute}