
export interface IMenuItem {
    id: number;
    name: string;
    price: number
}

export interface IOrderItem extends IMenuItem {
    quantity: number;
}

export type IOrderState = IOrderItem[] | [];

export interface ITipOptions{
    id: string,
    value: number,
    label: string,
}

export interface OrderState {
    order: IOrderItem[],
    percentage: ITipOptions['value']
}

export type OrderActions = { type: 'addItem', payload:{item: IMenuItem} } |
{ type: 'deleteOrder', payload: {orderItem: IOrderItem['id']}} | 
{ type: 'placeOrder'} |
{type: 'setPercentage', payload:{value: ITipOptions['value']}}