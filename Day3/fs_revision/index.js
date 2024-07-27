// fs module (file system)

const fs = require("fs")

// // creating a file and adding data to it, replace data from the existing file 

// // Synchronous
// fs.writeFileSync("student.txt", "karan singh", "utf-8")

// // error handling in a synchronous function

// try {
//     fs.writeFileSync("studen3t.txt", "karan singh", "utf-8")
//     console.log("file is created")
// } catch (error) {
//     console.log("Error while creating this file", error)
// }


// // Asynchronous
// fs.writeFile("student2.txt", "karan singh", "utf-8", (err) => {
//     if(err){
//         console.log("Error while creating this file");    
//     }
//     else {
//         console.log("file created successfully");
//     }
// })


// // creating a file and adding data in a existing file

// fs.appendFileSync("student.txt", "\n Kabir singh", "utf-8")
// fs.appendFileSync("student4.txt", "\n Kabir singh", "utf-8")   // creates a new file


// // existing file

// if(fs.existsSync('download')){
//     console.log("download exist")
// }
// else {
//     console.log("download doesn't exist")
// }


// // unlink file

// fs.unlinkSync("student.txt")


// // reading data from the file

// fs.readFile("student.txt", "utf-8", (err, data) => {
//     if(err){
//         console.log("Error while reading this file");
//     }
//     else {
//         console.log("file content is: ", data)
//     }
// })


// // create a folder name download

// fs.mkdirSync("new_folder")

// for nested folder

// fs.mkdirSync("src/images", {recursive: true})

// for(let i = 0; i < 4; i++){
//     fs.writeFileSync(`new_folder/student${i}.txt`, "", "utf-8")
// }

// fs.mkdirSync("new_folder/pdf")

// reading folder

// const result = fs.readdirSync("new_folder")
// console.log(result)


// // rename folder

// fs.renameSync("src", "download")

// fs.renameSync("student2.txt", "student_details.txt")