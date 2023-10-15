import React from 'react'
import { useStateContext } from '../context/ContexProvider'

// Imports necessary for right Panel
import BuyItemsPanel from '../components/RighPanel/BuyItemsPanel'
import TotalSection from '../components/RighPanel/TotalSection'
import MessagesSection from '../components/RighPanel/MessagesSection'
import SelectedItemSection from '../components/RighPanel/SelectedItemSection'
import ChangeSection from '../components/RighPanel/ChangeSection'
import ReturnMoneySection from '../components/RighPanel/ReturnMoneySection'
import FormBuy from '../components/RighPanel/FormBuy'
// Imports necessary for left Panel
import Items from '../components/LeftPanel/Items'
import ItemsPanel from '../components/LeftPanel/ItemsPanel'


const vendingMachine = () => {
    const { items } = useStateContext();

    return (
        <>
            <div id='vending-machine'>
                {/* Left Section */}
                <ItemsPanel>
                    <Items items={items} />
                </ItemsPanel>
                {/* Right Section */}
                <BuyItemsPanel>
                    <FormBuy>
                        <TotalSection />
                        <MessagesSection />
                        <SelectedItemSection />
                    </FormBuy>
                    <ChangeSection />
                    <ReturnMoneySection />
                </BuyItemsPanel>
            </div>
        </>
    )
}

export default vendingMachine
