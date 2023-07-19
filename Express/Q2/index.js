const express=require('express')
const app=express()
const port=process.env.PORT||3000
const userautentication=(req,res,next)=>{
    const authToken = req.headers.authorization;
    if(authToken==='SECRETE_TOKEN'){
        next()
    }
    else{
        res.json("failed")
    }
}
const data=  {id:1,Post:'post'}
const senddata=(res,req)=>{
    res.json(data)
}
app.get('/post',userautentication,senddata)
app.listen(port,()=>{
    console.log(`Listening at port:${port}`)
})