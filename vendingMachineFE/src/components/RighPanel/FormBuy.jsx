import React from 'react'
import usePurchase from '../../context/usePurchase'
import { useStateContext } from '../../context/ContexProvider';

const FormBuy = ({ children }) => {
    const {
        money,
        selectedItem,
        setItemAvailability,
        getItemInfo,
        setMessage,
        setChange,
        setMoney
    } = useStateContext();

    const { onPurchase } = usePurchase(
        money,
        selectedItem,
        setItemAvailability,
        getItemInfo,
        setMessage,
        setChange,
        setMoney
        );

    const handleSubmit = (event) => {
        event.preventDefault();
        onPurchase();
      };

    return (
        <form id='make-purchase' onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormBuy
