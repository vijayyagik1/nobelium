import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className=" container">

      <div className="Heading">
        <h3>UI/UX Design</h3>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
     
        </div>
     
      
    </div>
  )
}
export default Navbar