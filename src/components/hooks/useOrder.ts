import { useState } from "react";
import { IMenuItem, IOrderItem, IOrderState, ITipOptions } from "../../types";

const useOrder = () => {
  const [order, setOrder] = useState<IOrderState>([]);
  const [percentage, setPercentage] = useState<ITipOptions['value']>(0)

  const addItem = (item: IMenuItem) => {
    const findItem = order.find((elem) => elem.id === item.id);

    if (!findItem) {
      setOrder([...order, { ...item, quantity: 1 }]);
    } else {
      const uploadedOrder = order.map((elem) =>
        elem.id === item.id ? { ...elem, quantity: elem.quantity + 1 } : elem
      );
      setOrder(uploadedOrder);
    }
  };

  const deleteOrder = (orderItem: IOrderItem['id']) => {
    
    const orderUploader = order.filter((elem) => elem.id !== orderItem)
    setOrder(orderUploader)
  }

  return {
    addItem,
    order,
    setOrder,
    deleteOrder,
    percentage,
    setPercentage
  };
};

export default useOrder;
