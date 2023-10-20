const fs = require("node:fs")
const { buffer } = require("stream/consumers")

//Read files

// to read file as human language we put utf-8
// blocking code

/**
 * buffer gives the hex decimal for the letter when we read without utf8
 */
// const fileContent = fs.readFileSync("./hello.txt")
// console.log("fileContent", fileContent)

/**
 * checking the buffer
 */
// console.log(Buffer.from('a'))
// console.log(Buffer.from('a').toJSON())


//Asynchronus file reading
// Non-blocking code
// const fileContent = fs.readFile('./hello.txt', 'utf-8', (err,data) => {
//     err ? console.log("error") : console.log(data);
// })


//Write Files

// fs.writeFile('./users.json', JSON.stringify([{id:1,name:"ahmed"}]), (err) => {
//     err ? console.log("error", err) : console.log("done");
// })

//Read files
// fs.readFile('./users.json','utf-8',(err,data)=>{
//     err ? console.log("error") : console.log(JSON.parse(data)[0]);
// })

//Delete Files

// fs.unlink('./users.json', (err)=> {
//     err? console.log("error: ",err) : console.log("done") 
// })