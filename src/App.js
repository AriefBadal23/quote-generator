import './App.css';
import React, {useEffect, useState} from "react"
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState([]);

  const config = {
    headers:{
      'X-Api-Key': `${process.env.REACT_APP_VERY_PRIVATE_KEY}`
    }
  }
  const url = 'https://api.api-ninjas.com/v1/quotes?category=success'
  const fetchQuote = () => {
    axios.get(url, config)
    .then(res => {
      setQuote(res.data)
    })
    .catch(err=> console.log(err))

  }
  
  // event listener
  function ShowQuote(){
    fetchQuote()
  }
  // eslint-disable-next-line
  useEffect(()=> ShowQuote(), [])

  return (
    <div className='quote-card'>
      <h1>Random success quote generator</h1>
      {quote.map((item) => (
        <div className='quote-card-content'>
          <p>{item.quote}</p>
          <p>Author: {item.author}</p>
        </div>

      ))}
      <button id='quote-button' onClick={ShowQuote}>Get new Quote</button>
    </div>
  );
}

export default App;
