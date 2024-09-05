import { IMenuItem } from "../../types";

export type IMenuState = IMenuItem[] | []

export interface IMenuProps{
    addItem: (value: IMenuItem ) => void;
}