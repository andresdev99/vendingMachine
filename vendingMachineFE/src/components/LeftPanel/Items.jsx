import React, { useEffect } from 'react'
import { useStateContext } from '../../context/ContexProvider'


const Items = ({ items }) => {
    const { setSelectedItem } = useStateContext();

    useEffect(() => {
    }, [items])

    return (
        <>
            {
                items.map((item, index) => {
                    return <div key={index} className='item' onClick={() => setSelectedItem(item.code)}>
                        <h4>{item.code}</h4>
                        <p className='item-name'>{item.name[0].toUpperCase() + item.name.slice(1)}</p>
                        <img src={item.image} style={{ height: '50%' }} alt={item.name} />
                        <p>${(parseFloat(item.cost)).toFixed(2)}</p>
                        <p
                            style={item.availability == 0
                                ? { color: 'red', fontWeight: 700 }
                                : { fontWeight: 700 }}>
                            Quantity: {item.availability}
                        </p>
                    </div>
                })
            }
        </>
    )
}

export default Items

