//import "./Survey.css";
import { useOutletContext } from "react-router-dom";

function Survey() {
const outletContext = useOutletContext()
  return (
    <>
      <h2>Survey</h2>
      <p>{outletContext}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        accusamus.
      </p>
      
    </>
  );
}

export default Survey;
