import './App.css';
import React, {useEffect, useState} from "react"
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState([]);

  const config = {
    headers:{
      'X-Api-Key': '9ljd8SJvONzkK0vgwPVvl6ur6bvRzs9eL4IYSwKp'
    }
  }
  const url = 'https://api.api-ninjas.com/v1/quotes?category=success'
  const fetchQuote = () => {
    axios.get(url, config)
    .then(res => {
      setQuote(res.data)
      console.log(res.data)
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
      <h1>Quote generator</h1>
      {quote.map((item) => (
        <div className='quote-card-content'>
          <p>{item.quote}</p>
          <p>Author: {item.author}</p>
        </div>

      ))}
      <button onClick={ShowQuote}>Get new Quote</button>
    </div>
  );
}

export default App;
