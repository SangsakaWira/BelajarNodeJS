const express = require("express")
const router = express.Router()

const root = require("../utils/path")

router.get("/add-product",(req,res)=>{
    res.sendFile(root+"/views/add-product.html")
})

router.post("/add-product",(req,res)=>{
    res.send({
        message:"You can add some products!",
        method:"POST"
    })
})

module.exports = router