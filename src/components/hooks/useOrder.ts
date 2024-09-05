import { useState } from "react"
import { IMenuItem, IOrderItem } from "../../types"

export type IOrderState = IOrderItem[] | [];

const useOrder = () => {

    const [order, setOrder] = useState<IOrderState>([]);

    const addItem = (item : IMenuItem) => {
        const findItem = order.find( elem => elem.id === item.id);

        if(!findItem){ setOrder([...order, {...item, quantity: 1}])}else{
          const uploadedOrder = order.map(elem => elem.id === item.id ? {...elem, quantity: elem.quantity+1} : elem)
          setOrder(uploadedOrder)
        }
    }

  return {
    addItem,
    order,
    setOrder
  }
}

export default useOrder