import React from "react"
import axios from "axios";



const App = () => {
  let [responseData, setResponseData] = React.useState("Get Your Daily Ye")

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
    <div className="grid advice">
    <div className="eight wide column">
    <h1>{responseData} </h1>


      <button className="ui centered large violet button" onClick={(e) => fetchData(e)}
      type="button"> Click for ye'ism   <i class="icon user"></i> </button>
      </div>
    </div>
  )
}


export default App;
