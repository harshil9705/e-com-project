const { default: mongoose } = require("mongoose");

const productschema = new mongoose.Schema({
    title:String,
    price:Number,
    decription:String,
    image:String,
    stock:String,
    category:String,
    rating:[{userId :String , value:Number}],
    size:String,
    colour:String,
    seller:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})

const product = mongoose.model("productt",productschema)

module.exports = {product}