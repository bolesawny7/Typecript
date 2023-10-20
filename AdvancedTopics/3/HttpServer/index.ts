const http = require('node:http')

const app = http.createServer((err:Error,req:Request,res,next)=>{
    if (req.url == '/') {
    res.end("Hello Home")   
    } else if (req.url == '/about') {
        res.end("About")
    } else {
        res.end("Not found")
    }
})

app.listen(3001, ()=>{
    console.log("listening on port 3001")
})
