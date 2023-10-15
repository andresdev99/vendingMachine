import React from 'react'
import { useStateContext } from '../../context/ContexProvider';
import axiosClient from '../../axios-client';

const FormBuy = ({ children }) => {
    const { money, selectedItem, setItemAvailability, getItemInfo } = useStateContext();

    const onPurchase = (event) => {
        event.preventDefault();
        const payload = {
            money: money,
            item: getItemInfo(selectedItem)
        }

        axiosClient.post('/buyItem', payload)
            .then(({ data }) => {
                // setItemAvailability(data.availability);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })
    }

    return (
        //
        <form id='make-purchase' onSubmit={onPurchase}>
            {children}
        </form>
    )
}

export default FormBuy
