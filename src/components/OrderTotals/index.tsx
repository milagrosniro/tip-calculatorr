import { useMemo} from "react";
import { IOrderTotalsProps} from "./orderTotals.types";
import { formatCurrency } from "../../helpers";

const OrderTotals = ({order, percentage}: IOrderTotalsProps) => {

const subtotalAmount =  useMemo(()=> order ? order.reduce((total, item)=> total + (item.quantity*item.price),0): 0,[order]) 
const tipAMount = useMemo(()=>subtotalAmount*percentage,[percentage, subtotalAmount])
const totalAmount = useMemo(()=>subtotalAmount+tipAMount,[subtotalAmount, tipAMount])


  return (
    <>
    <div className=" space-y-3">

      <h2 className=" font-black text-2xl">Tip & Totals:</h2>
      <p>
        {" "}
        Subtotal:
        <span className=" font-bold"> {formatCurrency(subtotalAmount)} </span>
      </p>

      <p>
        {" "}
        Tip:
        <span className=" font-bold"> {formatCurrency(tipAMount)} </span>
      </p>

      <p>
        {" "}
        Total:
        <span className=" font-bold"> {formatCurrency(totalAmount)} </span>
      </p>
    </div>
    <button></button>
    </>
  );
};

export default OrderTotals;
