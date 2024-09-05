import { formatCurrency } from "../../../helpers"
import { IConsumptionItemProps } from "./consumptionItem.types"

const ConsumptionItem = ({item, deleteOrder}: IConsumptionItemProps) => {
    const {name, price, quantity} = item
  return (
    
    <div 
    className=" flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
    >

    <div>

    <p>{name} - {formatCurrency(price)} </p>
    <p className=" font-black">Quantity: {quantity} - {formatCurrency(price*quantity)} </p>
    </div>

<div>

    <button
    className=" flex items-center justify-center bg-red-600 h-8 w-8 rounded-full text-white font-black"
    onClick={()=>deleteOrder(item)}
    > x </button>
</div>

    </div>

    
  )
}

export default ConsumptionItem