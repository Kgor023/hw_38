import { useState } from "react";
import "./boxes.css";
import "./counter.css";
export default function ButtonHello() {
  let [hidden, setHidden] = useState(false);
  const handlerHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div className="boxes">
      <button onClick={handlerHidden} className="buttons">
        {hidden ? "Close" : "Open"}
      </button>
      <span style={{fontSize:'20px'}}> {hidden && "Hello"}</span>

    </div>
  );
}
