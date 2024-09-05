import Header from "./components/Header"
import Menu from "./components/Menu"

const App = () => {
  
  return (
    <>
    <Header/>
    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <Menu/>

      <div>
      <h2>Consumo</h2>

      </div>



    </main>
    </>
  )
}

export default App
