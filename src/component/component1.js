import React, { useState } from "react";
import '../CSS/component1.css'

export function Component1() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8551520/pexels-photo-8551520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    "https://images.pexels.com/photos/7780029/pexels-photo-7780029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  function handleChangeImage() {
    setIndex((index + 1)%images.length);
  }

  return (
      <div className="compOne">
        <img src={images[index]} alt={`Image ${index}`} />
        
        <div className="btn1">
        <button onClick={handleChangeImage}>Change Pic</button>
        </div>
      </div>
  );
}