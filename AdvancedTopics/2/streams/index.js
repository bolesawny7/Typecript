/**
 * streams [readable - writeable]
 * chunks of data that move from a point to other
 * 
 * streams don't use the whole file but uses parts at a time to not block the code
 */


const fs = require("node:fs")

const readStream = fs.createReadStream("./hello.txt", 'utf-8')
const writeStream = fs.createWriteStream("./stream.txt", 'utf-8')

/**
 * you will find when you run the file
 *  that there is more than one ("chunk") because the stream
 *  processes the data not only in one time
 * but makes chunks of data and deals with each chunk
 * not to block the code
 * 
 * delete the stream.txt and run then search for the word "chunk"
 * and see how many time did the stream cut the data
 */
readStream.on('data' ,(chunck)=> {
    console.log("\n\n________chunck________\n\n", chunck);
    writeStream.write("\n\n________chunck________\n\n")
    writeStream.write(chunck)
})


