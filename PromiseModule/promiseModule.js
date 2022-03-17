const calculatePromise = (x) => {
   //I promise to deliver some result in the future but I don't know when. 
   //I do some work in the background and then I deliver that result. 
   return new Promise((resolve, reject) => {
       //we're going to wait for 5 seconds and then do something.
       setTimeout(() => {
           if(x === 10){
               resolve({res: "Value is 10"}); //the promise worked out! 
           } else {
               reject({res:"Value is not 10"}); //the promise did not work out, there was an error.
           }
       },5000)

   });
}

export default {calculatePromise}