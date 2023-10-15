import React from 'react'
import { useStateContext } from '../../context/ContexProvider';

const FormReturnMoney = ({children}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form id='return-money' onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormReturnMoney
