import React, {useReducer,useEffect} from "react";
import {todoReducer} from "./todoReducer"
import './App.css';
import { useForm } from "./hooks/useForm";


//init allows to the app doesn't excute the code everytime there is a change
//We need to read the info from localStorage
const init =()=>{
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function App() {

  const [todos, dispatch]= useReducer(todoReducer, [], init);

  //Destructurig of initialstate object to only get the value
  const [ { description }, handleInputChange, reset,todoId ] = useForm({
    description: ''
  });

  //We will save our object in the localStorage. We must transform it to Json.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    
  }, [todos])

  const handleDelete = ( todoId ) => {

    const action = {
        type: 'delete',
        payload: todoId
    }

    dispatch( action );
}







  const handleSubmit =(e)=>{
    e.preventDefault();

    //validation to avoid add empty strings
    if ( description.trim().length <= 1 ) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };
  

    const action ={
      type: "add",
      payload: newTodo,

    };

    dispatch (action);
    //to reset the form after adding
    reset();

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
                  className="btn btn-danger"
                  onClick={()=>handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                  
                  
                  </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr/>

          <form onSubmit={handleSubmit}>
            <input
             type="text"
             name="description"
             className="form-control"
             placeholder="Aprender ..."
             autoComplete="off"
             value={ description }
             onChange={ handleInputChange }
            />

            <button
              className="btn btn-outline-primary mtn-1 btn-block">
                Add
            </button>
          </form>

        </div>
      </div>
    </>
  );
}

export default App;
