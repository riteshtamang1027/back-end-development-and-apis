const fs = require("fs");
const { exit } = require("process");
const { buffer } = require("stream/consumers");

fs.writeFileSync("assets/output.txt","Hello, I am Ritesh Tamang.");

fs.appendFileSync("assets/output.txt"," And I am the best Software Engineering.");


// check the file is exist or not

const exist = fs.existsSync("assets/output.txt");
console.log(exist);



// check the buffer value 


const buff = Buffer.from("Ritesh is the best Software Engineer");

console.log(buff);


const buff1 = Buffer.alloc(8,0xff);
console.log(buff1);


const decode = Buffer.from(buff,"base64").toString("utf8");
console.log("Decoding the Buffer value.")
console.log(decode);


// Hashing the value using crypto module 

const crypto = require("crypto");


const hash = crypto.createHash("sha256").update("Hello").digest("hex");

console.log(hash);


// generate random buffer value 
console.log("Generating random buffer value using crypto")

const random = crypto.randomBytes(8).toString("hex");

console.log(random);



console.log("Generate random universally unique id")
const id = crypto.randomUUID();
console.log(id);


const os = require("os");
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());
