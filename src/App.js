import React from "react"
import axios from "axios";


const App = () => {
  let [responseData, setResponseData] = React.useState("")

  const fetchData = (e) => {
    e.preventDefault();

    axios.get("https://api.kanye.rest")
    .then( (response) => {
      setResponseData(response.data.quote)
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  return(
    <div>
      <h1>  {responseData} </h1>
      <button onClick={(e) => fetchData(e)}
      type="button"> Click for ye'ism </button>
    </div>
  )
}


export default App;
