const express= require('express')
const path=require('path')

const SERVER_PORT = process.env.PORT || 3333

const app=express()

app.use('/public',express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>res.send("hello"))

app.listen(SERVER_PORT,()=>console.log("server started"))