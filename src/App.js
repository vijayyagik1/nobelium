import "./App.css";

import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Edit } from "./Components/Edit";
import { Delete } from "./Components/Delete";
import { Create } from "./Components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route />
          <Route path="/home" element={<Home/>} />

          <Route path="/Edit" element={<Edit/>} />
          <Route path="/delete" element={<Delete/>}/>
          <Route path="/create"  element={<Create/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;