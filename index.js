const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const router = require('./config/route')
const setupDB = require('./config/database') 

app.use(express.json())
setupDB()
app.use('/',router)
app.use(express.static('static'))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"static","index.html"))
})
app.listen(port,()=>{
    console.log('Listening to',port)
})