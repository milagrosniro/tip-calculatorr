import { IMenuItem } from "../../../types";

export interface IMenuItemProps {
    item: IMenuItem;
    addItem: (value:IMenuItem ) => void
}