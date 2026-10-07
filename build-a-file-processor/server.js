// Starter file — add your code here


// const http = require("http");


const fs = require("fs");


// const data = fs.readFileSync("assets/poem.txt");

// console.log(data);


// const data1 = fs.readFileSync("assets/poem.txt", {encoding:"utf8"});


// console.log(data1);

// using asynchronously 



fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
    console.log("Using callback function.");
  console.log(data);
});



// use async/await promisses to build file process




const fs1 = require("fs/promises");

async function main() {
    console.log("Using async/await promisses function.");

    const data = await fs1.readFile("assets/poem.txt", {encoding:"utf8"});

    console.log(data);
    
}

main();



