import React from 'react'

const Items = ({ items }) => {
    return (
        <>
            {
                items.map((item, index) => {
                    return <div key={index} className='item'>
                        <h4>{item.code}</h4>
                        <h2>{item.name}</h2>
                        <p>${(parseFloat(item.cost)).toFixed(2)}</p>
                        <p>Quantity: {item.availability}</p>
                    </div>
                })
            }
        </>
    )
}

export default Items
