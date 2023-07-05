const fs = require('fs')
fs.writeFile("nodejs_architecture.txt","Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.", function(err){
    if(err){
        console.log(`Error in writing the file : ${err}`)
    }
})
const buf = new Buffer.alloc(1024)
fs.open("nodejs_architecture.txt","r+",function(err,fd){
    if(err){
        console.log(`Error in Oepning the file : ${err}`)
    }
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(`Error in Reading the file : ${err}`)
        }
        console.log(buf.slice(0,bytes).toString())
    })
   
    
})
fs.appendFile("nodejs_architecture.txt","Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.", function(err){
    if(err){
        console.log(`Error in Appending the file : ${err}`)
    }
})
fs.readFile("nodejs_architecture.txt", function(err,data){
    if(err){
        console.log(`Error in Reading2 the file : ${err}`)
    }
    console.log(data.toString())
})


/*fs.unlink("nodejs_architecture.txt", function(err){
    if(err){
        console.log(`Error in Deleting the file : ${err}`)
    }
    console.log("Successfully Deleted")
})
*/