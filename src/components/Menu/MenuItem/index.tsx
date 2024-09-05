import { IMenuItemProps } from "./menuItem.types"

const MenuItem = ({item , addItem} : IMenuItemProps) => {

    const {name, price} = item;

  return (
    <>
    <button 
    className=" border-2 border-teal-400 rounded-md hover:bg-teal-200 w-full p-3 flex justify-between"
    onClick={()=> addItem(item)}
    >

    <p>{name}</p>
    <p className=" font-black">$ {price}</p>

    </button>

    </>
  )
}

export default MenuItem