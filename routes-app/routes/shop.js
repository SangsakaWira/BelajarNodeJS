const express = require("express")
const root = require("../utils/path")

const router = express.Router()

router.get("/shop",(req,res)=>{
    res.sendFile(root+"/views/shop.html")
})

module.exports = router