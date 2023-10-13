import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    money: 0.00,
    items: [
        {
            code: 8,
            name: 'water',
            cost: 0.65,
            availability: 6
        },
        {
            code: 5,
            name: 'juice',
            cost: 1.00,
            availability: 7
        },
        {
            code: 3,
            name: 'soda',
            cost: 1.50,
            availability: 8
        },
    ],
    setMoney: () => { },
    setItemAvailability: () => { }

})

export const ContextProvider = ({ children }) => {
    const initialState = useContext(StateContext);
    const [money, _setMoney] = useState(localStorage.getItem('money') ?? initialState.money)
    const [items, _setItemAvailability] = useState(initialState.items)

    const setItemAvailability = (indexItem) => {
        // // Clonamos el arreglo de items para no modificar el original directamente
        // const updatedItems = [...items];

        // // Actualizamos la disponibilidad del elemento en el índice proporcionado

        // // Actualizamos el estado con los items modificados
        // setItems(updatedItems);
    }

    // Send Money Into Local Storage in case the Page were closed or reloaded
    const setMoney = (moneyValue) => {
        // Add 0 when click on clear button
        let sumMoney = moneyValue == 0 ? moneyValue : (parseFloat(money) + moneyValue).toFixed(2);

        _setMoney(sumMoney);

        // Save in localStorage if the user get out of the page
        if (moneyValue) localStorage.setItem('money', sumMoney);
        else localStorage.removeItem('money');
    }

    return (
        <StateContext.Provider value={{
            money,
            items,
            setMoney,
            setItemAvailability
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
