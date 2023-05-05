import React from "react";
import "./Rem.css";

function pxToRem(px) {
  const baseFontSize = 16;
  const rem = px / baseFontSize;
  return rem.toFixed(2) + "rem";
}

function Rem() {
  const [pxValue, setPxValue] = React.useState(16);
  const [remValue, setRemValue] = React.useState(pxToRem(pxValue));

  function handleInputChange(event) {
    const px = Number(event.target.value);
    const rem = pxToRem(px);
    setPxValue(px);
    setRemValue(rem);
  }

  return (
    <div className="app-container">
      <h2 className="heading">Pixel to Rem Conversion</h2>
      <label htmlFor="px-input">Pixel value:</label>
      <input
        id="px-input"
        type="number"
        value={pxValue}
        onChange={handleInputChange}
      />
      <br />
      <label>Rem value: {remValue}</label>
    </div>
  );
}

export default Rem;
