//task1 , task2
// console.log("HELLO WORLD");
// const http = require("http");

// http.createServer(function (request,response){
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('Hello Node!!!!\n');

// }).listen(3000);
// console.log('Server running at http://127.0.0.1:3000/');


// task3

// const fs = require("fs");
// fs.writeFile('welcome.txt','Hello Node',(err)=>{
//     if (err) throw err;
//     console.log("File created successfully!")
// })
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});