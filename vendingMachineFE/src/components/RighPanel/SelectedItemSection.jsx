import React from 'react'
import { useStateContext } from '../../context/ContexProvider'

const SelectedItemSection = () => {
  const {selectedItem} = useStateContext();

  return (
      <div className='selected-item__section section'>
        <h3>Selected Item</h3>
          <input
              type="text"
              name='selectedItem'
              id='selected-item'
              readOnly
              value={selectedItem} />
          <button
              type='submit'
              className='selected-item-btn'>
              Make Purchase
          </button>
          <hr />
      </div>
  )
}

export default SelectedItemSection
