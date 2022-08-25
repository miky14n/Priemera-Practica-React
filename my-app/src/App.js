//import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
function App() {
  const url="https://ucb-tde-ninos-con-valor-api.herokuapp.com/api/kids";
  // hooks que almacena toodos
  const [todos, setTodos] = useState()
  const fetchApi = async()=>{
    const response = await fetch(url)
    console.log(response.statusText)
    const responseJson= await response.json();
    setTodos(responseJson)
    console.log(responseJson);
  }
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
