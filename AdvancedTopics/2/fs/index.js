const fs = require("node:fs")

//Read files

//to read file as human language we put utf-8
//blocking code
// const fileContent = fs.readFileSync("./hello.txt", 'utf-8')
// console.log("fileContent", fileContent)


//Asynchronus file reading
// Non-blocking code
const fileContent = fs.readFile('./hello.txt', 'utf-8', (err ,data) => {
    err ? console.log("error") : console.log(data);
})


//Write Files

// fs.writeFile('./users.json', JSON.stringify([{id:1,name:"ahmed"}]), (err) => {
//     err ? console.log("error", err) : console.log("done");
// })


//Delete Files

fs.unlink('./users.json', (err)=> {
    err? console.log("error: ",err) : console.log("done") 
})