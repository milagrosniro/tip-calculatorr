import OrderTotals from "../OrderTotals"
import TipPercentageForm from "../TipPercentageForm"
import ConsumptionItem from "./ConsumptionItem"
import { IConsumptionProps } from "./consumption.types"

const Consumption = ({order, deleteOrder, percentage, setPercentage, placeOrder}:IConsumptionProps) => {
  return (

    <div className=" p-5 h-full">
      <h2 className=" text-4xl font-black">Consumption</h2>
      
      <div className=" space-y-3 mt-10 border border-dashed pl-5 pr-5 border-slate-300 rounded-lg  h-full">
        {
           order.length === 0 ? 
           <p className=" text-center">The order is empty</p>
           : 
           <>
           {order.map(elem => <ConsumptionItem key={elem.id} item={elem} deleteOrder={deleteOrder} />)}
           <TipPercentageForm setPercentage={setPercentage} percentage={percentage} />
           <OrderTotals order={order} percentage={percentage} placeOrder={placeOrder} />
           </>
        }
     
      </div>
    </div>
  )
}

export default Consumption