import { tipOptions } from "../../data/db";
import { ITipPercentageProps } from "./tipPercentageForm.types";

const TipPercentageForm = ({setPercentage}:ITipPercentageProps) => {
  return (
    <div>
      <h3 className=" font-black text-2xl"> Tip:</h3>
      <form>
        {tipOptions.map((elem) => (
          <div className=" flex gap-2" key={elem.id}>
            <label htmlFor={elem.id}>{elem.label}</label>
            <input 
            id={elem.id} 
            type="radio" 
            name={"tip"} 
            value={elem.value} 
            onChange={(e)=> setPercentage(Number(e.target.value))}/>
          </div>
        ))}
      </form>
      
    </div>
  );
};

export default TipPercentageForm;
