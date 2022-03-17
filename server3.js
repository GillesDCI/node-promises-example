import axios from 'axios';


//https://api.chucknorris.io/jokes/random
const callApi = () => {
  axios.get('https://api.chucknorris.io/jokes/random')
  .then((res) => {
    console.log("response is", res.data)
    console.log("The joke is ", res.data.value)
  })
}

const callApiUsingAwait = async () => {

    try {
        console.time("The request took")
        const res = await axios.get('https://api.chucknorris.io/jokes/random');
        console.timeEnd("The request took")
        console.log("The joke is", res.data.value) 
    } catch (error) {
        console.error("Error happened reaching the server", error)
    }

}

//callApi();

callApiUsingAwait();