import { IOrderItem } from "../../../types";

export interface IConsumptionItemProps{
    item: IOrderItem;
    deleteOrder: (value: IOrderItem) => void;
}