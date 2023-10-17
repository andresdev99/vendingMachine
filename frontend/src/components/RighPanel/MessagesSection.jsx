import React from 'react'
import { useStateContext } from '../../context/ContexProvider'

const MessagesSection = () => {
    const { message } = useStateContext();
    return (
        <div className='messages__section section'>
            <h3>Messages</h3>
            <input
            type="text"
            id='messages'
            disabled
            style={
                message == "Insufficient money" || message == "No Availability" || message == "Select an item"
                ? { color: 'red'}
                : {}
        }
            value={message} />
        </div>
    )
}

export default MessagesSection
