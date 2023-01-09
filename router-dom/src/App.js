import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/navigation/NavBar";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";

function App() {
  return (
    <>
      <header>
        <h1>React Router DOM</h1>
        <NavBar></NavBar>
      </header>
      <main>
        <Route>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Route>
      </main>
    </>
  );
}

export default App;
