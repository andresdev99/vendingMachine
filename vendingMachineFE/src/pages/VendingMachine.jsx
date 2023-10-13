import React from 'react'
import BuyItemsPanel from '../components/RighPanel/BuyItemsPanel'
import TotalSection from '../components/RighPanel/TotalSection'
import Messages from '../components/RighPanel/MessagesSection'

const vendingMachine = () => {
    return (
        <>
            <div id='vending-machine'>
                <BuyItemsPanel>
                    <TotalSection />
                    <Messages />
                </BuyItemsPanel>
            </div>
        </>
    )
}

export default vendingMachine
