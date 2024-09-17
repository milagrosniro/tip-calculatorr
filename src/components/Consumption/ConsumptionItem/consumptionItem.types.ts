import { Dispatch } from "react";
import { IOrderItem } from "../../../types";
import { OrderActions } from "../../reducers/orderReducer.types";

export interface IConsumptionItemProps{
    item: IOrderItem;
    dispatch: Dispatch<OrderActions>;
}