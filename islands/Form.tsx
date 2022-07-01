/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import {useState} from "preact/hooks";

export default () => {
  const [num, setNum] = useState<number>(0);
  
  const onClick = () => setNum(num + 1);
  
  return (
    <div className="form">
      <button onClick={onClick}>
        Click me
      </button>
      <label>{num}</label>
    </div>
  );
}