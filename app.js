const express = require ('express');
const bodyparser = require ('express');
const PORT = 6500;
const cors = require ('cors')
const mongoose = require ('mongoose')
const app = express();
require('dotenv').config()

const userrouter = require ('./Router/Router.js')
 app.use(express.json())
 app.use(bodyparser.json())
 app.use(cors())
console.log(process.env.DATABASE_URL)
 mongoose.connect(process.env.DATABASE_URL)
.then(()=>{console.log("mongodb is connected")})
.catch((err)=>{console.log("mongodb is not connected",err)}) 


app.get('/',(req,res)=>{
    res.send("Crud operation")
})

app.use('/api',userrouter)

app.listen(PORT,()=>{console.log("server running on:",PORT)})