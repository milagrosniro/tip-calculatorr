import { Dispatch } from "react";
import { IOrderState } from "../../types";
import { OrderActions } from "../reducers/orderReducer.types";

export interface IConsumptionProps{
    order: IOrderState;
    percentage: number;
    dispatch: Dispatch<OrderActions>;
}