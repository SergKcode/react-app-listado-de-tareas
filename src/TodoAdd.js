import React from 'react'
import { useForm } from './hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    //Destructurig of initialstate object to only get the value
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

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
    
        handleAddTodo( newTodo );
        //to reset the form after adding
        reset();
    
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>

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
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>


            </form>
            
        </>
    )
}
