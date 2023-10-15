import axiosClient from '../axios-client';

const usePurchase = (
    money,
    selectedItem,
    setItemAvailability,
    getItemInfo,
    setMessage,
    setChange,
    setMoney) => {

    const onPurchase = () => {
        const itemInfo = getItemInfo(selectedItem)
        setChange('')
        const payload = {
            money: money,
            item: itemInfo
        }

        axiosClient.post('/buyItem', payload)
            .then(({ data }) => {
                const message = data.error ?? data.message;

                // Check if it's number an greater than 0
                if (!isNaN(data.response) && data.response >= 0) {
                    setItemAvailability(itemInfo.code, data.response);
                    setChange(parseFloat(data.change).toFixed(2))
                    setMoney(0.00);
                }
                setMessage(message);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })

    }

    return {
        onPurchase
    }
}

export default usePurchase
