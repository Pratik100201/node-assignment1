const http = require("http")
const Server = http.createServer((req,res)=>{
    if(req == "/"){
        res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!")
    }
    res.end()
})
Server.listen(5000)