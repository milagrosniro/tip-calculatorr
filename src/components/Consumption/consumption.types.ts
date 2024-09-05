import { IOrderItem, IOrderState } from "../../types";

export interface IConsumptionProps{
    order: IOrderState;
    deleteOrder: (value: IOrderItem) => void
}