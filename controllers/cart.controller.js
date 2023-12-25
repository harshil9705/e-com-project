const { cart } = require("../models/cart.schema")

// get
const getcart = (req,res)=>{
    res.render("cart")
}

const show = async(req,res)=>{
    const customerId = req.bla.id
    data = await cart.find({customerId}).populate("productId")
    res.send(data)
}

// post

const senttocart  = async(req,res)=>{
    try {
        const customerId = req.bla.id
        const {id} = req.params
        const qty = 1
    
        let obj = {
            customerId,
            qty,
            productId:id
        }

        const findd = await cart.findOne({customerId,productId:id})

        if(!findd){
            const data = await cart.create(obj)
            res.send(data)
        }
        else{
            const data = await cart.findByIdAndUpdate(findd.id,{qty: findd.qty+1})
            res.send(data)
        }
        // window.location.href("/product/shop")
    } catch (error) {
        res.send({error:error.message})
    }
}

// patch

const quantity = async(req,res)=>{
    const {qty} = req.body
    const {id} = req.params
    const data = await cart.findById(id)
    data.qty = data.qty + qty
    // data.qty = 1
    await data.save()
    // const data = await cart.findByIdAndUpdate(id,qty)
    
    if(data.qty == 0){
        await cart.findByIdAndDelete(id)
        // location.reload()
    }
    res.send({data})
} 


module.exports = {getcart,senttocart,show,quantity}