// import './E.css';
import { useContext } from "react";
import { MyContext } from "../App";

function E() {
  const count = useContext(MyContext);
  return <div style={{ backgroundColor: "darkblue", color:"white", fontSize:"2rem" }}>I am E component. Count:{count}</div>;
}

export default E;
