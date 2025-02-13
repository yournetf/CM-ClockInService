import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [Response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Creates a base axios path to move relative from.
  const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/todos/1'
  })

  const axiosGetFunction = () =>{
    axiosInstance.get('/posts')
      .then(res => {
        console.log('Response:', res);
        setResponse(res.data);
        console.log("setResponseTriggered");
      })
      .catch(err => {
        console.log('Error details:', {
          message: err.message,
          response: err.response,
          status: err?.response?.status
        });
        setError(err.message);
      });
  }

  const asyncFunction = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(res => res.json())
        .then(json => console.log(json))
  }

  /* 
    Moves from the base axios path to 
    https://jsonplaceholder.typicode.com/todos/1/posts
  */
 useEffect(() => {
    axiosGetFunction();
    asyncFunction();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {Response 
        ? <pre>{JSON.stringify(Response, null, 2)}</pre>
        : <div>NULL</div>
      } 
    </div>
  );
}

export default App;
