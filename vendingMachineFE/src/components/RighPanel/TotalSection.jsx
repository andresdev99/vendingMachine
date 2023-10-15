import React from 'react'
import { useStateContext } from '../../context/ContexProvider';

const TotalSection = () => {
    const { money, setMoney } = useStateContext();

    // Buttons to add money
    const buttons = [
        {
            text: 'Add $1',
            value: 1
        },
        {
            text: 'Add $0.25',
            value: 0.25
        },
        {
            text: 'Add $0.10',
            value: 0.10
        },
        {
            text: 'Add $0.05',
            value: 0.05
        },
        {
            text: 'Clear',
            value: 0.00
        },
    ];

    return (
        <div className="total__section section">
            <h2>Total ${parseFloat(money).toFixed(2)}</h2>
            <input type="text" readOnly name='selectedItem' value={parseFloat(money).toFixed(2)} />
            <div className='add-money'>
            {
                buttons.map((buttonInfo, index) => {
                    return (
                        <button
                            className='add-money-btn'
                            type='button' key={index}
                            onClick={() => setMoney(buttonInfo.value)}>
                        {buttonInfo.text}
                    </button>
                    )
                })
            }
            </div>
        </div>
    )
}

export default TotalSection
