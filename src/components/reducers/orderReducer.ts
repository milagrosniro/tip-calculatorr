import { OrderActions, OrderState } from "./orderReducer.types";

export const initialState : OrderState = {
    order: [],
    percentage: 0
}

export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {
    const {order} = state

    switch(action.type){
        case 'addItem' : {
            const {item} = action.payload

            const findItem =  order.find((elem) => elem.id === item.id);

    if (!findItem) {
      return {...state, order: [...order, { ...item, quantity: 1 }]}
    } else {
      const uploadedOrder =  order.map((elem) =>
        elem.id === item.id ? { ...elem, quantity: elem.quantity + 1 } : elem
      );
      return {...state, order: uploadedOrder }
    }
        };

        case 'deleteOrder' : {
            const {orderItem} = action.payload
            const orderUploader = order.filter((elem) => elem.id !== orderItem)
            return {...state, order: orderUploader}

        };

        case 'placeOrder' : {
            return initialState
        };

        case 'setPercentage' : {
            const {value} = action.payload
            return {...state, percentage: value}
        };

        default: return state
    }

}