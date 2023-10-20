const crypto = require("node:crypto")

// current process. environment . will change the threadpool size from the default 4
// try and see the time after and before you change the size
// the threadpoolsize is defined by the number of available cores in the machine so put one million and it will never change than the max of your machines
process.env.UV_THREADPOOL_SIZE = 5;

const start = performance.now();

// crypto.pbkdf2('secret','salt',100000,64,'sha512', () => {
//     console.log("End of PBKDF2 ms", performance.now()- start)
// })

// crypto.pbkdf2('secret','salt',100000,64,'sha512', () => {
//     console.log("End of PBKDF2 ms", performance.now()- start)
// })

// crypto.pbkdf2('secret','salt',100000,64,'sha512', () => {
//     console.log("End of PBKDF2 ms", performance.now()- start)
// })

// crypto.pbkdf2('secret','salt',100000,64,'sha512', () => {
//     console.log("End of PBKDF2 ms", performance.now()- start)
// })

// crypto.pbkdf2('secret','salt',100000,64,'sha512', () => {
//     console.log("End of PBKDF2 ms", performance.now()- start)
// })

//no time gap because it isn't in the threadpool network is not in the file system
//network is handled in the kernel os not in libuv

fetch('https://dummyjson.com/products')  
.then(()=> {
    console.log("End of Request ms", performance.now()- start)
});

fetch('https://dummyjson.com/products')
.then(()=> {
    console.log("End of Request ms", performance.now()- start)
});

fetch('https://dummyjson.com/products')
.then(()=> {
    console.log("End of Request ms", performance.now()- start)
});

fetch('https://dummyjson.com/products')
.then(()=> {
    console.log("End of Request ms", performance.now()- start)
});

fetch('https://dummyjson.com/products')
.then(()=> {
    console.log("End of Request ms", performance.now()- start)
});

fetch('https://dummyjson.com/products')
.then(()=> {
    console.log("End of Request ms", performance.now()- start)
});

fetch('https://dummyjson.com/products')
.then(()=> {
    console.log("End of Request ms", performance.now()- start)
});
