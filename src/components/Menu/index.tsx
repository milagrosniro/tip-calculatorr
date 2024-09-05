import { useEffect, useState } from "react";
import { menuItems } from "../../data/db";
import { IMenuProps, IMenuState } from "./menu.types";
import MenuItem from "./MenuItem";

const Menu = ({addItem} : IMenuProps) => {

    const [data, setData] = useState<IMenuState>([]);

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
