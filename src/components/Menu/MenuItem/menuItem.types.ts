import { Dispatch } from "react";
import { IMenuItem } from "../../../types";
import { OrderActions } from "../../reducers/orderReducer.types";

export interface IMenuItemProps {
    item: IMenuItem;
    // addItem: (value:IMenuItem ) => void;
    dispatch: Dispatch<OrderActions>
}