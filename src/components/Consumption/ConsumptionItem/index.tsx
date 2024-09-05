import { IConsumptionItemProps } from "./consumptionItem.types"

const ConsumptionItem = ({item}: IConsumptionItemProps) => {
    const {name, price, quantity} = item
  return (
    <>
    <div 
    className=" border-2 border-teal-400 rounded-md hover:bg-teal-200 w-full p-3 flex justify-between"
    >

    <p>{name}</p>
    <p>{quantity}</p>
    <p className=" font-black">$ {price}</p>

    </div>

    </>
  )
}

export default ConsumptionItem