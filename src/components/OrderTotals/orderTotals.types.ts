import { IOrderState, ITipOptions } from "../../types";

export interface IOrderTotalsProps{
    order: IOrderState;
    percentage: ITipOptions['value']
}

export interface ITotalsState {
    subtotal: number;
     tip: number;
     total: number;
}