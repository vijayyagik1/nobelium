import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import About from './Components/About';

import LogIn from '../Components/LogIn';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Register' element={<Register/>} />
       </Routes>
    </div>
  );
}

export default App;