import React from 'react'
import { useStateContext } from '../../context/ContexProvider'

const ChangeSection = () => {
    const { change } = useStateContext();
  return (
    <div className='change__section section'>
        <h3>Change</h3>
          <input type="text" id='change' disabled value={change} />
          <hr />
    </div>
  )
}

export default ChangeSection
