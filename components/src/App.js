import './App.css';
import Welcome from './components/Welcome';
//import NewDate from './components/NewDate';
//import Person from './components/Person';
import Main from './components/Main';

function App() {
  let today = new Date(Date.now()).toLocaleDateString();
  return ( 
    <Main>
    <Welcome userName="Naiara" today={today}></Welcome>
    <Welcome userName="Judith" today={today}></Welcome>
    <Welcome userName="thai" today={today}></Welcome>
    </Main>
  );
}

export default App;
