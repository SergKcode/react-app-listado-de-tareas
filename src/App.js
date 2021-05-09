import React, {useReducer} from "react";
import {todoReducer} from "./todoReducer"
import './App.css';

const initialState=[{
  id:new Date().getTime(),
  desc:"Aprender React",
  done:false
}];

function App() {

  const [todos, dispatch]= useReducer(todoReducer,initialState);


  const handleSubmit =(e)=>{
    e.preventDefault();
    const newTodo ={
      id: new Date().getTime(),
      desc: "Nueva tarea",
      done:false
    };

    const action ={
      type: "add",
      payload: newTodo,

    };

    dispatch (action);
  }
  return (
    <>
      <h1>TodoApp({todos.length})</h1>
      <hr/>
      <div className="row">
        <div className="col-7">

          <ul className="list-group list-group-flush">
            {
              todos.map((todo, i)=>(
              <li
                key={todo.id}
                className="list-group-item"
                >
                  <p className="text-center">{i+1}. {todo.desc}</p>
                  <button
                  className="btn btn-danger">
                    Borrar
                  </button>
                  
                  
                  </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr/>

          <form onSubmit={handleSubmit}>
            <input
            placeholder="Aprender..."
            name="description"
            className="form-control"
            type="text"
            autoComplete="off"/>

            <button
              className="btn btn-outline-primary mtn-1 btn-block">
                Agregar
            </button>
          </form>

        </div>
      </div>
    </>
  );
}

export default App;
