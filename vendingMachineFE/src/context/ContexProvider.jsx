import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    money: 0.00,
    selectedItem: '',
    message: 'Insert Coin',
    change: '',
    returnedMoney: '',
    moneyHistory: [],
    items: [
        {
            code: 8,
            name: 'water',
            cost: 0.65,
            availability: 6
        },
        {
            code: 7,
            name: 'juice',
            cost: 1.00,
            availability: 7
        },
        {
            code: 6,
            name: 'soda',
            cost: 1.50,
            availability: 8
        },
        {
            code: 5,
            name: 'cookies',
            cost: 0.90,
            availability: 3
        },
        {
            code: 4,
            name: 'milk',
            cost: 1.20,
            availability: 1
        },
        {
            code: 3,
            name: 'chips',
            cost: 1.60,
            availability: 5
        },
    ],
    setMoney: () => { },
    setItemAvailability: () => { },
    setSelectedItem: () => { },
    getItemInfo: () => { },
    setMessage: () => { },
    setChange: () => { },
    setReturnedMoney: () => { },
    setMoneyHistory: () => { }
})

export const ContextProvider = ({ children }) => {

    const initialState = useContext(StateContext);

    /**
     * Get initial items
     * @returns {JSON}
     */
    const getCurrentItems = () => {
        return localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : initialState.items ;
    }

    const [money, _setMoney] = useState(localStorage.getItem('money') ?? initialState.money)
    const [items, _setItemAvailability] = useState(getCurrentItems());
    const [selectedItem, _setSelectedItem] = useState(localStorage.getItem('selectedItem') ?? initialState.selectedItem)
    const [message, setMessage] = useState(initialState.message)
    const [change, setChange] = useState('')
    const [returnedMoney, setReturnedMoney] = useState(initialState.returneyMoney)
    const [moneyHistory, setMoneyHistory] = useState([])
    /**
     * Get all the item info
     * @param {number} selectedItem - Selected Item
     * @returns {JSON} - Item Information
     */
    const getItemInfo = (selectedItem) => {
        const itemInfo = items.find(item => item.code == selectedItem);
        return itemInfo;
    }


    /**
     *Set new item Availability
     * @param {number} indexItem - Index from the item json
     * @param {number } newAvailability -New Availability
     */
    const setItemAvailability = (itemCode, newAvailability) => {
        const newItems = items.map((item) => {
            if (item.code == itemCode) {
                item.availability = newAvailability;
            }
            return item;
        })

        // Actualizamos el estado con los items modificados
        _setItemAvailability(newItems);

        localStorage.setItem('items', JSON.stringify(newItems));
    }

    /**
     *Set Selected Item into 'Selected Item Section'
     * @param {number} id item Code
     */
    const setSelectedItem = (id) => {
        _setSelectedItem(id);
        // Save in localStorage if the user get out of the page
        if (id) localStorage.setItem('selectedItem', id);
        else localStorage.removeItem('selectedItem');
    }

    /**
     *Send Money Into Local Storage in case the Page were closed or reloaded
     * @param {float} moneyValue Money inserted intro the vending Machine
     */
    const setMoney = (moneyValue) => {
        // Add 0 when click on clear button
        let sumMoney = moneyValue == 0 ? moneyValue : (parseFloat(money) + moneyValue).toFixed(2);
        let currentMoneyHistory = [...moneyHistory, moneyValue];

        _setMoney(sumMoney);
        setMoneyHistory(currentMoneyHistory);

        currentMoneyHistory = JSON.stringify(currentMoneyHistory);


        // Save in localStorage if the user get out of the page
        if (moneyValue) {
            localStorage.setItem('money', sumMoney);
            localStorage.setItem('moneyHistory', currentMoneyHistory);
        }
        else {
            localStorage.removeItem('money');
            localStorage.removeItem('moneyHistory');
        }
    }

    return (
        <StateContext.Provider value={{
            money,
            items,
            selectedItem,
            message,
            change,
            returnedMoney,
            moneyHistory,
            setMoney,
            setItemAvailability,
            setSelectedItem,
            getItemInfo,
            setMessage,
            setChange,
            setReturnedMoney,
            setMoneyHistory
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
