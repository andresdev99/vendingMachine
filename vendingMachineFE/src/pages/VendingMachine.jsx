import React from 'react'
import BuyItemsPanel from '../components/RighPanel/BuyItemsPanel'
import TotalSection from '../components/RighPanel/TotalSection'
import Messages from '../components/RighPanel/MessagesSection'

const vendingMachine = () => {
    return (
        <>
            <BuyItemsPanel>
                <TotalSection />
                <Messages />
            </BuyItemsPanel>
        </>
    )
}

export default vendingMachine
