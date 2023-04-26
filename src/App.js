import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signIn" element={<Login/>}></Route>
        <Route path="/signUp" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
