const crypto = require("node:crypto")

// current process. environment . will change the threadpool size from the default 4
// try and see the time after and before you change the size
// the threadpoolsize is defined by the number of available cores in the machine so put one million and it will never change than the max of your machines

const start = performance.now();
let i = 0
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
    console.log("End of PBKDF2 number:", i++, "in: ", performance.now() - start)
})
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
    console.log("End of PBKDF2 number:", i++, "in: ", performance.now() - start)
})
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
    console.log("End of PBKDF2 number:", i++, "in: ", performance.now() - start)
})
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
    console.log("End of PBKDF2 number:", i++, "in: ", performance.now() - start)
})
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', () => {
    console.log("End of PBKDF2 number:", i++, "in: ", performance.now() - start)
})