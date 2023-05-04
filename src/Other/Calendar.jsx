import React, { useState } from "react";
import Calendar from "react-calendar";
// import "./style.css";
import "./Calendar.css";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-container">
      <h1 className="rotateInDownLeft">Calendar</h1>
      <Calendar className="custom-calendar" onChange={onChange} value={value} />
    </div>
  );
}

export default MyApp;
