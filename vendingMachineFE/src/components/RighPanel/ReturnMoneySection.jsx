import React from 'react'

const ReturnMoneySection = () => {
  return (
    <div className='return-money__section section'>
        <h3>Returned Money</h3>
        <input type="text" disabled  id='returned-money'/>
        <button className='returned-money-btn' >Return Money</button>
    </div>
  )
}

export default ReturnMoneySection
