let fs = require("fs")

//Async
// fs.writeFile("textt.txt","New file create",()=>{})
    
// fs.writeFileSync("text.txt","New file create")

//sync

// fs.unlinkSync("copyy.txt")
// console.log("delete done")

// fs.unlink("copy.txt",(err,suc)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("delete file")
//     }
// })

//Async
// fs.readFile("contacts.txt","utf-8",(error,result)=>{
//     if(error){
//         console.log("Error",error)
//     }else{
//         console.log(result)
//     }
// })

// const res = fs.readFileSync("contacts.txt","utf-8")
// console.log("sync file return value",res)

// fs.copyFile("text.txt","copyy.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("create copy file")
//     }
// })

// fs.appendFile("text.txt",new Date().toDateString(),(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.appendFileSync("./copy.txt",new Date().getDay().toString())
// console.log("append done")

// let stats = fs.statSync("./module.js")
// console.log(stats)

// fs.chmod('copy.txt', 0o775, (err) => {
//     if (err) throw err;
//     console.log('The permissions for file "copy.txt" have been changed!');
// });

// fs.open("copy.txt",'w',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.unlinkSync("copy1.txt")

fs.copyFileSync("text.txt","copy.txt")
fs.cpSync("text.txt", "copy1.txt")