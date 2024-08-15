const fs = require("fs")
const newFile=fs.readFileSync("a.txt","utf-8");
console.log(newFile)