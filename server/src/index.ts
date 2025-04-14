import express from 'express'
const app = express()

app.post('/resources',(req,res)=>{
    res.send("hello")
})

app.listen(()=>{
    console.log("App listing on port")
})