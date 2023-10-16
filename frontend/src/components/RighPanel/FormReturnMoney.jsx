import React from 'react'
import { useStateContext } from '../../context/ContexProvider';

const FormReturnMoney = ({children}) => {
    const { onReturnMoney } = useStateContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        onReturnMoney();
    };

    return (
        <form id='return-money' onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormReturnMoney
