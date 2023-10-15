import React from 'react'
import { purchaseItem } from '../../context/purchase'
import { useStateContext } from '../../context/ContexProvider';

const FormBuy = ({ children }) => {
    const {
        money,
        selectedItem,
        setItemAvailability,
        getItemInfo,
        setMessage,
        setChange,
        setMoney,
        setReturnedMoney
    } = useStateContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        purchaseItem(
            money,
            selectedItem,
            setItemAvailability,
            getItemInfo,
            setMessage,
            setChange,
            setMoney,
            setReturnedMoney
        );
      };

    return (
        <form id='make-purchase' onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormBuy
