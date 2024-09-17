import { useReducer } from "react";
import Consumption from "./components/Consumption"
import Header from "./components/Header"
import Menu from "./components/Menu"
import { initialState, orderReducer } from "./components/reducers/orderReducer";

const App = () => {

  // const { deleteOrder, setPercentage, placeOrder} = useOrder();

  const [state, dispatch] = useReducer(orderReducer, initialState);
  const {percentage, order} = state
  
  return (
    <div className=" h-full">
    <Header/>
    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 h-full">
      <Menu dispatch={dispatch}/>
      
      <Consumption order={order}
        dispatch={dispatch}
        percentage={percentage} />

    </main>
    </div>
  )
}

export default App
