// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Component/navbar";
import { Home } from "./Component/home";
import { Contact } from "./Component/new";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
         
         
          <Route path="/contact" element={<Contact />} />



          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;