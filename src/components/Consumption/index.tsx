import ConsumptionItem from "./ConsumptionItem"
import { IConsumptionProps } from "./consumption.types"

const Consumption = ({order}:IConsumptionProps) => {
  return (

    <div className=" p-5">
      <h2 className=" text-4xl font-black">Consumption</h2>
      <div className=" space-y-3 mt-10">
        {
            order.map(elem => <ConsumptionItem key={elem.id} item={elem} />)
        }
     
      </div>
    </div>
  )
}

export default Consumption