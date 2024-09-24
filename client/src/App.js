import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Home/Home";
import Nav from "./Nav-Footer/Nav";
import About from "./About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navbar" element={<Nav/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
