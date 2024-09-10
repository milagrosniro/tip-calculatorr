import { IOrderItem, IOrderState, ITipOptions } from "../../types";

export interface IConsumptionProps{
    order: IOrderState;
    deleteOrder: (value: IOrderItem['id']) => void;
    percentage: number;
    setPercentage: (value: ITipOptions['value']) => void;
    placeOrder : () => void
}