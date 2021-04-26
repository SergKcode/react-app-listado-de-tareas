import React, {useReducer} from "react";
import {todoReducer} from "./todoReducer"
import './App.css';

const initialState=[{
  id:new Date().getTime(),
  desc:"Aprender React",
  done:false
}];

function App() {

  const [todos]= useReducer(reducer,initialState)
  return (
    <>
      <h1>TodoApp</h1>
    </>
  );
}

export default App;
