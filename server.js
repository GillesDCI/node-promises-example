import fs from 'fs';
import { promises as fsPromises } from 'fs';

//write a file using the promises 
fsPromises.writeFile("test.txt","Hello test","utf-8","a")

//reading the content of the file synchronously.
const content = fs.readFileSync("test.txt",'utf-8');
console.log("The content synchronously is", content);

//use of then/catch
//I read the file in the backgroudnd
fsPromises.readFile("test.txt", 'utf-8').then((data) => {
    //the function is ready
    console.log("The data is ", data)
}).catch(() => { //something went wrong
     console.log("Something went wrong")
    })

//use of callback function
fs.readFile("test.txt", "utf-8", function(err, content){
    if(err){
        return console.log("we have an error");
    }
    console.log("the content in the callback is: ", content)
});

fsPromises.appendFile("test.txt", "Append the data here").then(() => {
    console.log("The data was added");
})

test();
//console.log("this is atest");
//asynchronous function that awaits the result 
async function test(){
   //console.log("this is a test");
   console.time("START")
   //awaiting the result of the readfile. 
   const res = await fsPromises.readFile('test.txt', 'utf-8');
   console.timeEnd("START")
   console.log("the result of the asynchronous function is ", res);
}