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


console.log("Number of logical cpu cores: ",os.cpus().length);


// check the path

const path = require("path");

const fullPath = path.join(__dirname,"assets","poem.txt");
console.log(fullPath)

console.log(path.dirname(fullPath));


console.log(path.join("assets","..","server.js"));
console.log(path.resolve("assets","..","server.js"));


// const parts = path.parse("assets/poem.txt");
// console.log(parts);



process.platform;
process.env;

console.log(process.version);
console.log(process.argv);
console.log(process.argv[2]);

process.stdout.write("Hello ");
process.stdout.write("World\n"); // newline only when you add \n
process.stderr.write("Something went wrong\n");


// const fs3 = require("fs");
// const readable = fs3.createReadStream("assets/poem.txt", { encoding: "utf8" });

// readable.on("data", (chunk) => {
//   console.log(chunk);
// });

// readable.on("end", () => {
//   console.log("Done reading");
// });


// const writable = fs.createWriteStream("assets/stream-output.txt");
// writable.write("First chunk\n");
// writable.write("Second chunk\n");
// writable.end();

const fs0 = require("fs")
const readable = fs0.createReadStream("assets/poem.txt");
const writable = fs0.createWriteStream("assets/stream-output.txt");

readable.on("error",(err)=>{
    console.log("Error reading file: ",err.message);
})


writable.on("error",(err)=>{
    console.log("Error write file: ",err.message)
})

writable.on("finished",()=>{
    console.log("File copied successfully!")
})

readable.pipe(writable);
