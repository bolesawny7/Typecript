// const logger = require("./logger")
// const logger1 = require("./logger")
// const logger2 = require("./logger")
// const logger3 = require("./logger")
// const logger4 = require("./logger")
// const logger5 = require("./logger")
// const logger6 = require("./logger")

// to import modules like that we need to change the extension of the modules and files to mjs
// or change type in package.json to commonjs or module
// import { log } from "./logger.js"
// log("hi")

// logger.log2("hi")


// console.log(__filename)

// the modules are cached only once even if we require it millions of times
console.log(require.cache)

/**
 * to delete the module from the cache if we want to run the module everytime as if it was the first time
 * and to ru the self invoked function everytime we require the module we delete it from the cache
 */
// delete require.cache['Path']
