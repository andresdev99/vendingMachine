import React from 'react'
import { useStateContext } from '../../context/ContexProvider'

const SelectedItemSection = () => {
  const {selectedItem} = useStateContext();

    const onPurchase = (event) => {
        // event.preventDefault();
    }

  return (
      <div className='selected-item__section section'>
        <h3>Selected Item</h3>
          <input
              type="text"
              name='selectedItem'
              readOnly
              value={selectedItem} />
          <button
              type='submit'
              className='selected-item-btn'>
              Make Purchase
          </button>
      </div>
  )
}

export default SelectedItemSection
