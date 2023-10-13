import React from 'react'
import { useStateContext } from '../../context/ContexProvider'

const SelectedItemSection = () => {
  const {selectedItem} = useStateContext();
  
  return (
    <div className='selected-item__section section'>
        <h3>Selected Item</h3>
        <input type="text" disabled value={selectedItem}/>
        <button>Make Purchase</button>
    </div>
  )
}

export default SelectedItemSection
