import promiseModule from "./PromiseModule/promiseModule.js";

// promiseModule.calculatePromise(10)   
// .then((res) => {console.log("The data is", res)})
// .catch((err) => {console.error("There was an error", err)})

//console.log("This is going to continue");
const loadPromise = async () => {
    console.log("Entering the promise function");
    try {
        //trying this code here
        console.time("The response is");
        const res = await promiseModule.calculatePromise(10);
       
        console.timeEnd("The response is");

        console.log("the response is ", res);
    } catch (error) {
        console.log("There was an error", error)
    }
}

//---> DATABASE 

loadPromise();


