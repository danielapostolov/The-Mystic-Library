import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    //Doesn't support checkboxes
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // TODO form validations
        submitCallback(values)
    }

    return {
        values,
        changeHandler,
        submitHandler
    };
}