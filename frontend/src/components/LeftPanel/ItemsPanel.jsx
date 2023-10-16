import React from 'react'

const ItemsPanel = ({children}) => {
    return (
        <div className='items-grid__list'>
            {children}
        </div>
    )
}

export default ItemsPanel
