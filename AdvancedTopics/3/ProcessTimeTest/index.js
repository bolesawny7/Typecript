const crypto = require("node:crypto")

const start = performance.now();

// //this will block the code for 74ms
// crypto.pbkdf2Sync('secret','salt',100000,64,'sha512')
// console.log("End of PBKDF2 ms", performance.now()- start)

// //this will block the code for another 74ms then will block the code for 150ms
// crypto.pbkdf2Sync('secret','salt',100000,64,'sha512')
// console.log("End of PBKDF2 ms", performance.now()- start)

//this will not block the code then you will see the three functions will take approximatly the same time
crypto.pbkdf2('secret','salt',100000,64,'sha512', () => {
    console.log("End of PBKDF2 ms", performance.now()- start)
})

crypto.pbkdf2('secret','salt',100000,64,'sha512', () => {
    console.log("End of PBKDF2 ms", performance.now()- start)
})

crypto.pbkdf2('secret','salt',100000,64,'sha512', () => {
    console.log("End of PBKDF2 ms", performance.now()- start)
})