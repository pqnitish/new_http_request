const http = require("http");
const fs =require("fs");
const PORT = 8080;
 http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.write("welcome to Home Page");
    res.end();
  } else if (url === "/aboutus") {
    res.write("welcome to About Page");
    res.end();
  } else if (url === "/contactus") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<a href="www.masaichool.com">masai</a>`);
    res.end();
  }else if(url === '/index'){
const readFile = fs.readFile("index.js",'utf8',(err,data)=>{
  if(err){
    throw err;
    
  }else {
    console.log(data); 
  }
  res.write(readFile);
  res.end();
})
  }else{
    res.write("page not found");
    end();
  }
});

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});
