//import './App.css';
import {useState} from "react";
import Person from "./components/Person";
function App() {
  const [count, setCount]=useState(0)
  return (
    <div>
      <Person/>
      {/*<p>Has clicado {count} veces</p>
      <buttom onClick={()=> setCount(count +1)}>Pulsame</buttom>*/}
    </div>
  );
}

export default App;
