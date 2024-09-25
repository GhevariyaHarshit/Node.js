// const http = require("http")
// http.createServer(function(req,res){
//     res.write("Hello new server create!")
//     res.end()
// }).listen(3000)


// http.createServer((request,response)=>{
//     console.log(request.headers)
//     response.end("Hello From Server abcc")
// }).listen(3000,()=>console.log("Server Start!"))

const http = require("http")
const fs = require("fs")

http.createServer((request,response)=>{
    const log = `${Date.now()}: ${request.url} New request Received\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(request.url){
            case '/':
                response.end("Homepage")
                break
            case '/about':
                response.end("I am abc")
                break
            default:
                response.end("404 Not Found")
        }
    })
}).listen(3000,()=>{console.log("Server Start!")})
