import { ITipOptions } from "../../types";

export interface ITipPercentageProps{ 
    setPercentage: (value: ITipOptions['value']) => void;
    percentage: ITipOptions['value']
}