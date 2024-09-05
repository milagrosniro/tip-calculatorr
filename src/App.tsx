import Consumption from "./components/Consumption"
import Header from "./components/Header"
import Menu from "./components/Menu"
import useOrder from "./components/hooks/useOrder";

const App = () => {

  const {addItem, order} = useOrder();
  
  return (
    <>
    <Header/>
    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <Menu addItem={addItem}/>
      <Consumption order={order}/>



    </main>
    </>
  )
}

export default App
