import './App.css';
import {Component1} from './component/component1'
import {Component2} from './component/component2'
import {Component3} from './component/component3'

function App() {
  return (
    <div className='mainBox'>
      <Component1/>
      <Component2/>
    <div className='formBox'>
    <Component3/>
    </div>
      
    </div>
  );
}

export default App;