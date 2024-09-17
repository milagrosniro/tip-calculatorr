import { Dispatch } from "react";
import { ITipOptions } from "../../types";
import { OrderActions } from "../reducers/orderReducer.types";

export interface ITipPercentageProps{ 
    // setPercentage: (value: ITipOptions['value']) => void;
    dispatch: Dispatch<OrderActions>;
    percentage: ITipOptions['value']
}