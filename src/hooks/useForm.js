import { useState } from "react"


export const useForm = ( initialState = {} ) => {

    //This useForm recieve an object (initialState)

    const [values, setValues] = useState(initialState);

    //Reset the form
    const reset = () => {
        setValues( initialState );
    }


    //This handle allow us to read 
    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    //return the state of my form and the handle to change the values
    return [ values, handleInputChange, reset ];

}
