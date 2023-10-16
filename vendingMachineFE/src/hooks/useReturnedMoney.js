import React, { useState } from 'react'
import axiosClient from '../axios-client'

const useReturnedMoney = ({ setMessage, money, setMoney }) => {
  const [moneyHistory, _setMoneyHistory] = useState([])
  const [returnedMoney, setReturnedMoney] = useState('')

  const getMoneyHistory = () => {
    return localStorage.getItem('moneyHistory')
      ? JSON.parse(localStorage.getItem('moneyHistory'))
      : [];
  }

  const setMoneyHistory = (money) => {
    let currentMoneyHistory = [...getMoneyHistory(), money];

    if (money) {
      _setMoneyHistory(currentMoneyHistory);
      localStorage.setItem('moneyHistory', JSON.stringify(currentMoneyHistory));
    } else {
      localStorage.removeItem('moneyHistory');
      // Clean state
      _setMoneyHistory([]);
    }
  }

  const onReturnMoney = () => {
    const payload = {
      moneyHistory: getMoneyHistory(),
      totalMoney: money
    }

    axiosClient.post('/returnMoney', payload)
      .then(({ data }) => {
        setReturnedMoney(data.response ?? data.error);
        setMessage(data.error ? '' : data.message);
        setMoney(0.00);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      })
  }

  return {
    moneyHistory,
    returnedMoney,
    onReturnMoney,
    setMoneyHistory,
    getMoneyHistory,
    setReturnedMoney
  }
}

export default useReturnedMoney
