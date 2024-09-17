import { Dispatch } from "react";
import { IMenuItem } from "../../types";
import { OrderActions } from "../reducers/orderReducer.types";

export type IMenuState = IMenuItem[] | []

export interface IMenuProps{
    // addItem: (value: IMenuItem ) => void;
    dispatch: Dispatch<OrderActions>
}