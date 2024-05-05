import { useState } from "react";
import './boxes.css'
import './counter.css'
export default function Counter() {
  let [counter, setCounter] = useState(0);
  const handlerCountPlusHundred = () => {
    setCounter(counter + 100);
  };
  const handlerCountMinusHundred = () => {
    setCounter(counter - 100);
  };
  const handlerCountPlusTen = () => {
    setCounter(counter + 10);
  };
  const handlerCountMinusTen = () => {
    setCounter(counter - 10);
  };
  const handlerCountClear = () =>{
    setCounter(counter = 0);
  }
  return (
    <div className="boxes">
      <div className="counter">
        {counter}
      </div>
      <div className="buttons_flex">
        <button className="buttons" onClick={handlerCountPlusHundred}>
          +100
        </button>
        <button className="buttons" onClick={handlerCountMinusHundred}>
          -100
        </button>
        <button className="buttons" onClick={handlerCountPlusTen}>
          +10
        </button>
        <button className="buttons" onClick={handlerCountMinusTen}>
          -10
        </button>
      </div>

      <button onClick={handlerCountClear} className="buttons">Clear</button>
    </div>
  );
}
