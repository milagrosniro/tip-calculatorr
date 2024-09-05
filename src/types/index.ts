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