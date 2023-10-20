function log(message) {
    console.log("this is message from logger", message)
}
function log2(message) {
    console.log("this is message from logger2", message)
}
// module.exports = {
//     log: log
// };

(function hi() {
    console.log("hi")
})()



//exporting object
// module.exports = {
//     log, log2 
// };

