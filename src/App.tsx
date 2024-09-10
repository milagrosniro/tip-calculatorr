import Consumption from "./components/Consumption"
import Header from "./components/Header"
import Menu from "./components/Menu"
import useOrder from "./components/hooks/useOrder";

const App = () => {

  const {addItem, order, deleteOrder, percentage, setPercentage, placeOrder} = useOrder();
  
  return (
    <div className=" h-full">
    <Header/>
    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 h-full">
      <Menu addItem={addItem}/>
      
      <Consumption order={order} deleteOrder={deleteOrder} percentage={percentage} setPercentage={setPercentage} placeOrder={placeOrder}/>

    </main>
    </div>
  )
}

export default App
