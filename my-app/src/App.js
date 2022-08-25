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
      Lista de Niños
      { !todos? 'Cargando Datos':
        todos.map((todo,index)=>{
          return <table>  <tbody> <tr> <td> Nombre: {todo.name} </td>  <td>Apellido: {todo.lastName}</td>  <td>Cumpleaños {todo.birthDate}</td>  <td>CI: {todo.ci}</td>  </tr> </tbody></table>
        })
      }
      <a href="./componentes/Post" >Agregar Niños  </a>
    </div>
  );
}

export default App;
