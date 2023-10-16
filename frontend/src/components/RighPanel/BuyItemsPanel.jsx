import React from 'react'
import { useStateContext } from '../../context/ContexProvider'

const BuyItemsPanel = ({children}) => {
  const {money} =  useStateContext();
  return (
    <div className='buy-items-panel'>
          <h1>Total ${parseFloat(money).toFixed(2)}</h1>
        {children}
    </div>
  )
}

export default BuyItemsPanel
