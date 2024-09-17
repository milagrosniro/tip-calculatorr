import { IMenuItemProps } from "./menuItem.types"

const MenuItem = ({item , dispatch} : IMenuItemProps) => {

    const {name, price} = item;

  return (
    <>
    <button 
    className=" border-2 border-teal-400 rounded-md hover:bg-teal-200 w-full p-3 flex justify-between"
    onClick={()=> dispatch({type:'addItem', payload:{item}})}
    >

    <p>{name}</p>
    <p className=" font-black">$ {price}</p>

    </button>

    </>
  )
}

export default MenuItem