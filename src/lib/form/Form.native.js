
import React from 'react';
import FormContext from './FormContext';

export default function Form({onSubmit, children}) {

    function onSubmitFn() {

        onSubmit && onSubmit();
    }

    return (
        <FormContext.Provider
            value={{onSubmitFn}}
        >
            {children}
        </FormContext.Provider>
    )
}
