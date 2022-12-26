import './App.css';
import Foto1 from './components/imagenes/Foto1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div class="cards">
      <h1 class="title">MR. ROBERT</h1>
      <p class="subt">UI/UX Designer</p>
      <p class="solid">Verified</p>
      <div>
        <FontAwesomeIcon icon={faCircleCheck}/>{" "}
        <FontAwesomeIcon icon={faCircle}/>
     </div>
      <img class="foto1" src={Foto1} alt=''/>
      </div>
   
  );
}

export default App;
