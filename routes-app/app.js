const express = require("express")
const app = express()
const root = require("./utils/path")

const adminRouter = require("./routes/admin")
const shopRouter = require("./routes/shop")

app.use(adminRouter)
app.use(shopRouter)

app.use((req,res)=>{
    res.status(404).sendFile(root+"/views/404.html")
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Server is running!")
})