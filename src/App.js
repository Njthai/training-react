import "./App.css";
import CardWrapper from "./components/CardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEnvelope, faCircleCheck, faDollarSign, faAddressBook, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import Foto1 from "./components/imagenes/Foto1.png";
function App() {
  return ( 



  <div className="card-container">
    <CardWrapper>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={Foto1} alt="freelancer-one"></img>
          <span className="dot"></span>
        </div>
      </div>
      <div className="info-container">
        <h3>MR ROBERT</h3>
        <p>UI/UX Designer</p>
        <div className="hire">
          <div>
            Rate: <span className="price">$85/hr</span>
          </div>
          <button className="hire-button">Hire me</button>
        </div>
        <div className="rating">
        <div>5.0</div>
        <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div> <div> (105 Reviews)</div>
        </div>
        </div>
        <div className="icons">
          <div className="verified">
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>Verified</span>
            </div>
            <span className="circle available">
            <FontAwesomeIcon icon={faDollarSign} />
            </span>
            <span className="circle available">
            <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="circle not-available">
            <FontAwesomeIcon icon={faAddressBook} />
            </span>
            <span className="circle not-available">
            <FontAwesomeIcon icon={faPhoneFlip} />
            </span>
      
      </div>

    </CardWrapper>
    </div>
  
  )

}

export default App;
