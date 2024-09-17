import OrderTotals from "../OrderTotals"
import TipPercentageForm from "../TipPercentageForm"
import ConsumptionItem from "./ConsumptionItem"
import { IConsumptionProps } from "./consumption.types"

const Consumption = ({order, percentage, dispatch}:IConsumptionProps) => {
  return (

    <div className=" p-5 h-full">
      <h2 className=" text-4xl font-black">Consumption</h2>
      
      <div className=" space-y-3 mt-10 border border-dashed pl-5 pr-5 border-slate-300 rounded-lg  h-full">
        {
           order.length === 0 ? 
           <p className=" text-center">The order is empty</p>
           : 
           <>
           {order.map(elem => <ConsumptionItem key={elem.id} item={elem} dispatch={dispatch} />)}
           <TipPercentageForm dispatch={dispatch} percentage={percentage} />
           <OrderTotals order={order} percentage={percentage} dispatch={dispatch} />
           </>
        }
     
      </div>
    </div>
  )
}

export default Consumption