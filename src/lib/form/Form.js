
import React from 'react';
import FormContext from './FormContext';

export default function Form({onSubmit, children}) {

    function onSubmitFn(e) {
        e.preventDefault();
        onSubmit && onSubmit();
    }

    return (
        <form
            onSubmit={onSubmitFn}
        >
            {children}
        </form>
    )
}
