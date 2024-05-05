import { useState } from "react";
import "./boxes.css";
import "./counter.css";
interface Posts{
    text:string,
}
export default function Posts(props:Posts) {
  let [like, setLike] = useState(0);
  const handlerLike = () => {
    setLike(like +1);
  };
  return (
    <div >
    <p>{props.text}</p>
    <button className="buttons" onClick={handlerLike}>Лайк ({like})</button>
  </div>
  );
}
