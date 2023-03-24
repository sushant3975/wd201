const minimist = require("minimist");

/*const fs = require("fs");
const greet = ' Hello GitHub! '
const Hello = () => {
  console.log(greet)
}
Hello()

const fs =  require("fs");
fs.writeFile(
  "sample.txt",
  "Hello World. Welcome to Node.js File System module.",
  (err) => {
    if (err) throw err;
    console.log("File is  created!");
  }
);

/*const fs = require("fs");
fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});



const fs = require("fs");
fs.readFile("sushinfo.txt",(err,data) => {
  if (err) throw err;
  console.log(data.toString())
});

const fs = require("fs");
fs.appendFile(" sushinfo.txt", "  scgp = 7.78  ", (err) => {
  if (err) throw err;
  console.log("File updated!");
});

const fs = require("fs");
fs.writeFile(
  "experiment.txt",
  "trial of experiment is successful",
  (err) => {
    if (err) throw err;
    console.log("File created!");
  }
);

const fs = require("fs");
fs.writeFile(
  "sample.txt",
  "Hello World. Welcome to Node.js File System module.",
  (err) => {
    if (err) throw err;
    console.log("File created!");
  }
);

const fs = require("fs");
fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

const fs = require("fs");
fs.appendFile("sample.txt", " This is my updated content", (err) => {
  if (err) throw err;
  console.log("File updated!");
});

const fs = require ("fs");
fs.appendFile("sushinfo.txt", "  hobby = watching movies", (err) => {
  if (err) throw err;
  console.log("File updated!");
});

const fs = require ("fs");
fs.rename("sample.txt","test.txt",(err) => {
  if (err) throw err ;
  console.log("File name updated!");
});

const fs = require("fs");
fs.unlink("test.txt", (err) => {
  if (err) throw err;
  console.log("File test.txt deleted successfully!");
});

const fs = require("fs");
fs.writeFile(
  "sush.txt","file is created by sushant. ",
  (err) => {
    if (err) throw err ;
    console.log( "file created successfully!");
  }
);
 
const fs = require("fs");
fs.appendFile(
  "sush.txt",
  "name = SUSHANT SAMBHAJI PATIl, date of birth = 06.04.2023 , collification= B-Tech (in mechanical )",
   (err) => {
    if (err) throw err;
    console.log("changes done in file successfully "); 
   });
  
const fs = require("fs");
fs.readFile("sush.txt", (err,data ) => {
  if (err) throw err;
  console.log(data.toString())
});
 
const fs = require("fs");
fs.rename("sush.txt","vasu.txt",
(err) => {
  if (err) throw err;
  console.log("file is renamed!sucessfully")
} );

const fs = require("fs");
fs.unlink("sushinfo.txt",(err) => {
  if (err) throw err ;
  console.log("file is deleted sucessfully ")
});

const fs = require("fs");
fs.closeFilePath()


const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
const stream =fs.createReadStream("sample.txt");
stream.pipe(res);
    // fs.readFile("sample.txt",(err,data) => {
    //     res.end(data);   
    // })
});
server.listen(3975);
/*
const readline = require("readline");

const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail.question(`Please provide your name - `, (name) => {
  console.log(`Hi ${name}!`);
  lineDetail.close();
}
 const readline = require("readline");

 const lineDetail= readline.createInterface({
  input: process.stdin,
  output: process.stdout,
 });

lineDetail.question(`what is your name?`,(name) =>{
  console.log(`welcome ${name}!`);
  lineDetail.close();
});

const args = require("minimist")(process.argv.slice(2));

console.log(args);

let args = minimist(process.argv.slice(2),{
  alias:{
    n:"name",
    a:"age",
  },
});

let args = minimist(process.argv.slice(2), {
  alias: {
    n: "name",
    a: "age",
  },
 });

 let args = minimist(process.argv.slice(2), {
  default: {
    greeting: "Hello",
  },
 }); */
 const readline = require("readline");
const lineDatail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 lineDatail.question(`enter your name & sarname also write your class of studing`,(name)=> {
  console.log(`personal information = ${name}!`);
  lineDatail.close();
 });