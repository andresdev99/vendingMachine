import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    money: 0,
    setMoney: () => { }
})

export const ContextProvider = ({ children }) => {
    const [money, _setMoney] = useState(localStorage.getItem('money') ?? 0.00)

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
            setMoney
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
