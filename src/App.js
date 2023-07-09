import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Findhospital from "./components/FindHospital";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/FindHospital" element={<Findhospital />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
  );
};

export default App;
