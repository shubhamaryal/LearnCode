const fs = require("fs")

console.log("starting")
// fs.writeFileSync("shubham.txt","hello my name is shubham")

fs.writeFile("shubham2.txt", "Hello Shubham!!",()=>{
    console.log("done")
    fs.readFile("shubham2.txt",(error,data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("shubham.txt"," ,yo chai append garya",(error)=>{
    console.log(error)
})

console.log("ending")