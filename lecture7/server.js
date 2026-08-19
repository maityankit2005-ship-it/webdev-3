const http = require("http");

const users={
    1:{name:"Alice", email:"alice@example.com"},
    2:{name:"Bob", email:"bob@example.com"},
    3:{name:"malasi",email:"malasi@example.com"},
    4:{name:"sara",email:"sara@example.com"}
}

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(req.method);
    // res.end("hello world");
    if(req.url=="/"){
        res.writehead(200,{"content-type":"text/html"});
    }
});

server.listen(3000,()=>{
    console.log("serveris running on port 3000");
})