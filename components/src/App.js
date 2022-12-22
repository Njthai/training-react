import './App.css';
import Welcome from './components/Welcome';
import NewDate from './components/NewDate';
import Person from './components/Person';

const veryWelcome = (today) => {
  console.log(today);
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerHTML = `hoy es${today}`;
  div.appendChild(h1);
  let prap ={
    userName: "John",
    todayDate: today
  }
};

function App() {
  let today = new Date(Date.now()).toLocaleDateString();
  return ( 
    <div className="main">
    <Welcome userName="Naiara" today={today}></Welcome>
    <Welcome userName="Judith" today={today}></Welcome>
    <Welcome userName="thai" today={today}></Welcome>
    </div>
  );
}

export default App;
