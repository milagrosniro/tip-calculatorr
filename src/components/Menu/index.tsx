import { useEffect, useState } from "react";
import { menuItems } from "../../data/db";
import { IMenuState } from "./menu.types";
import MenuItem from "./MenuItem";
import useOrder from "../hooks/useOrder";


const Menu = () => {

    const [data, setData] = useState<IMenuState>([]);

    const {addItem} = useOrder();

    useEffect(()=>{
        setData(menuItems)
    },[])

  return (
    <div className=" p-5">
      <h2 className=" text-4xl font-black">Menu</h2>
      <div className=" space-y-3 mt-10">

      {
        data.map(item => <MenuItem key={item.id} item={item}  addItem={addItem} />)
      }
      </div>
    </div>
  );
};

export default Menu;
