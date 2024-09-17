import { Dispatch } from "react";
import { IOrderState, ITipOptions } from "../../types";
import { OrderActions } from "../reducers/orderReducer.types";

export interface IOrderTotalsProps{
    order: IOrderState;
    percentage: ITipOptions['value'];
    dispatch: Dispatch<OrderActions>;
}

export interface ITotalsState {
    subtotal: number;
     tip: number;
     total: number;
}