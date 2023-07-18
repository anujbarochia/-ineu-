const { default: axios } = require('axios')
const express=require('express')
const app=express()
const axios = require('axios');
const port=5000


app.get('/post',async(req,res)=>{


    try{
  const response=await axios.get("https://backend-api.com/posts")
     const posts=response.data.slice(0,20)
     res.json(posts)
    }
    catch{
       console.log(error)
    }
})

app.listen(port,()=>{
    console.log("it is runinig at port:5000")
})