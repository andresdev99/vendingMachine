import React from 'react'
import { useStateContext } from '../../context/ContexProvider'

const ReturnMoneySection = () => {
    const { returnedMoney } = useStateContext();

  return (
    <div className='return-money__section section'>
        <h3>Returned Money</h3>
          <textarea
              id="returned-money"
              disabled
              cols="30"
              rows="20"
              style={returnedMoney == "You didn't insert money to return it"
                  ? { color: 'red' }
                  : {}}
              value={returnedMoney}></textarea>
        <button className='returned-money-btn' >Return Money</button>
    </div>
  )
}

export default ReturnMoneySection
